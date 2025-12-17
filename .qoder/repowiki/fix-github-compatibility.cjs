#!/usr/bin/env node
/**
 * GitHub Wiki Compatibility Fixer
 * 
 * Fixes the following issues:
 * 1. file:// protocol links -> relative GitHub links
 * 2. <cite> HTML tags -> blockquotes
 * 3. Mermaid style definitions (fill, stroke) -> removed
 * 4. Mermaid quoted edge labels `: "text"` -> `: text`
 * 5. Array{} syntax in classDiagram -> Array notation
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'en', 'content');

/**
 * Find all markdown files recursively
 */
function findMarkdownFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Fix file:// protocol links to use relative paths
 * Converts: [name](file://path/to/file#L1-L10) 
 * To: [name](path/to/file#L1-L10)
 */
function fixFileProtocolLinks(content) {
  // Match markdown links with file:// protocol
  return content.replace(/\[([^\]]+)\]\(file:\/\/([^)]+)\)/g, (match, text, path) => {
    // Convert file:// path to relative path
    return `[${text}](${path})`;
  });
}

/**
 * Fix <cite> tags to use blockquotes
 * Converts: <cite>content</cite>
 * To: > content (as blockquote)
 */
function fixCiteTags(content) {
  // Replace opening <cite> tag with blockquote marker
  // and closing </cite> with nothing
  return content.replace(/<cite>\s*([\s\S]*?)\s*<\/cite>/g, (match, innerContent) => {
    // Convert the inner content to blockquote format
    const lines = innerContent.trim().split('\n');
    const quotedLines = lines.map(line => `> ${line}`);
    return quotedLines.join('\n');
  });
}

/**
 * Fix Mermaid style definitions
 * Removes lines like: style Start fill:#4CAF50,stroke:#388E3C
 */
function fixMermaidStyles(content) {
  // Find mermaid code blocks and remove style lines
  return content.replace(/```mermaid\s*([\s\S]*?)```/g, (match, mermaidContent) => {
    const lines = mermaidContent.split('\n');
    const filteredLines = lines.filter(line => {
      const trimmed = line.trim();
      // Remove style lines
      if (trimmed.startsWith('style ') && (trimmed.includes('fill:') || trimmed.includes('stroke:'))) {
        return false;
      }
      return true;
    });
    return '```mermaid\n' + filteredLines.join('\n') + '```';
  });
}

/**
 * Fix Mermaid quoted edge labels
 * Converts: A --> B : "text"
 * To: A --> B : text
 */
function fixMermaidQuotedLabels(content) {
  return content.replace(/```mermaid\s*([\s\S]*?)```/g, (match, mermaidContent) => {
    // Fix quoted edge labels in sequence diagrams and flowcharts
    // Pattern: : "something" -> : something
    let fixed = mermaidContent.replace(/: "([^"]+)"/g, ': $1');
    
    // Fix quoted relationship labels in classDiagram
    // Pattern: --> "text" -> --> text
    fixed = fixed.replace(/--> "([^"]+)"/g, '--> $1');
    fixed = fixed.replace(/: "([^"]+)"$/gm, ': $1');
    
    return '```mermaid\n' + fixed + '```';
  });
}

/**
 * Fix Array{} syntax in classDiagram
 * Converts: Array{code, label, flag}
 * To: Array of code label flag
 */
function fixArraySyntax(content) {
  return content.replace(/```mermaid\s*([\s\S]*?)```/g, (match, mermaidContent) => {
    // Fix Array{} syntax
    const fixed = mermaidContent.replace(/Array\{([^}]+)\}/g, (m, items) => {
      const cleanItems = items.replace(/,/g, ' ');
      return `Array~${cleanItems.trim()}~`;
    });
    return '```mermaid\n' + fixed + '```';
  });
}

/**
 * Fix classDiagram attribute notation with curly braces
 * Some diagrams use curly braces which aren't parsed correctly
 */
function fixClassDiagramBraces(content) {
  return content.replace(/```mermaid\s*([\s\S]*?)```/g, (match, mermaidContent) => {
    // Replace { } in attribute types with angle brackets for generics
    // Example: Map{string, number} -> Map~string number~
    let fixed = mermaidContent.replace(/\{([^{}]+)\}/g, (m, inner) => {
      // Only replace if it looks like a generic type (no = or : inside)
      if (!inner.includes('=') && !inner.includes(':') && inner.includes(',')) {
        return `~${inner.replace(/,/g, ' ').trim()}~`;
      }
      return m;
    });
    return '```mermaid\n' + fixed + '```';
  });
}

/**
 * Ensure proper line endings within mermaid blocks
 */
function fixMermaidLineEndings(content) {
  return content.replace(/```mermaid\s*([\s\S]*?)```/g, (match, mermaidContent) => {
    // Ensure there's a newline after ```mermaid
    let fixed = mermaidContent;
    // Remove any trailing whitespace from lines but keep structure
    const lines = fixed.split('\n');
    const cleanedLines = lines.map(line => line.trimEnd());
    return '```mermaid\n' + cleanedLines.join('\n').trim() + '\n```';
  });
}

/**
 * Process a single file
 */
function processFile(filePath) {
  console.log(`Processing: ${path.relative(CONTENT_DIR, filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Apply all fixes
  content = fixFileProtocolLinks(content);
  content = fixCiteTags(content);
  content = fixMermaidStyles(content);
  content = fixMermaidQuotedLabels(content);
  content = fixArraySyntax(content);
  content = fixMermaidLineEndings(content);
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ Fixed`);
    return true;
  } else {
    console.log(`  - No changes needed`);
    return false;
  }
}

/**
 * Main function
 */
function main() {
  console.log('GitHub Wiki Compatibility Fixer');
  console.log('================================\n');
  
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }
  
  const files = findMarkdownFiles(CONTENT_DIR);
  console.log(`Found ${files.length} markdown files\n`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n================================`);
  console.log(`Done! Fixed ${fixedCount} of ${files.length} files.`);
}

main();
