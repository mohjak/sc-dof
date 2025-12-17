# Deployment Guide

<cite>
**Referenced Files in This Document**   
- [DEPLOYMENT.md](file://DEPLOYMENT.md)
- [README.md](file://README.md)
- [package.json](file://package.json)
- [vite.config.ts](file://vite.config.ts)
- [tailwind.config.ts](file://tailwind.config.ts)
- [index.html](file://index.html)
- [src/App.tsx](file://src/App.tsx)
- [src/main.tsx](file://src/main.tsx)
- [src/data/eventData.ts](file://src/data/eventData.ts)
- [src/contexts/LanguageContext.tsx](file://src/contexts/LanguageContext.tsx)
- [public/manifest.json](file://public/manifest.json)
- [public/site.webmanifest](file://public/site.webmanifest)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Package Contents](#package-contents)
3. [Quick Start](#quick-start)
4. [Platform-Specific Deployment](#platform-specific-deployment)
5. [Server Configuration](#server-configuration)
6. [Security Considerations](#security-considerations)
7. [Performance Optimization](#performance-optimization)
8. [Post-Deployment Checklist](#post-deployment-checklist)
9. [Troubleshooting](#troubleshooting)
10. [Support and Resources](#support-and-resources)

## Introduction

This deployment guide provides comprehensive instructions for deploying the Syrian Liberation Day Event Platform to various hosting environments. The application is a static single-page application (SPA) built with React, TypeScript, and Vite, designed to commemorate Syrian Liberation Day with multilingual support for Arabic, English, and Turkish.

The platform features responsive design, RTL (right-to-left) layout support for Arabic, and client-side routing. It is optimized for performance and can be deployed to any static hosting service that serves HTML, CSS, and JavaScript files.

**Section sources**
- [README.md](file://README.md#L1-L296)
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L1-L335)

## Package Contents

The release package contains the following essential components:

- `dist/` - Complete production build with optimized static assets
- `CHANGELOG.md` - Release notes and version history
- `DEPLOYMENT.md` - This deployment guide
- `README.md` - Project documentation and development guidelines

The `dist/` directory contains all the compiled assets ready for deployment, including HTML, CSS, JavaScript, images, and other static resources. No server-side processing is required as this is a fully static SPA.

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L5-L12)

## Quick Start

### Prerequisites

Before deployment, ensure you have:
- A web server or hosting platform capable of serving static files
- No server-side runtime required (PHP, Node.js, etc.)
- HTTPS recommended for production environments

### Basic Deployment Steps

1. Extract the release package
2. Upload the contents of the `dist/` directory to your web server
3. Configure your web server for SPA routing (all requests should redirect to index.html)
4. Access your website through your domain or hosting URL

The application uses client-side routing via React Router, so proper server configuration is essential to handle deep links correctly.

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L13-L27)

## Platform-Specific Deployment

### Netlify

**Method 1: Drag and Drop**
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag the `dist/` folder into the upload area
3. Your site will deploy with a random subdomain
4. Configure a custom domain in site settings if needed

**Method 2: Netlify CLI**
```bash
npm install -g netlify-cli
cd dist
netlify deploy --prod
```

**Configuration**
Create `netlify.toml` in the dist directory with rewrite rules for SPA support.

### Vercel

**Method 1: Vercel CLI**
```bash
npm install -g vercel
cd dist
vercel --prod
```

**Method 2: GitHub Integration**
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### GitHub Pages

1. Create or use an existing repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Upload dist contents to the selected branch
5. Site will be available at `https://username.github.io/repository-name`

**Note**: If deploying to a subdirectory, update the base path in `vite.config.ts` before building.

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init hosting`
3. Configure `firebase.json` with the public directory set to `dist`
4. Deploy: `firebase deploy`

### AWS S3 + CloudFront

1. Create an S3 bucket
2. Enable static website hosting
3. Upload dist contents to the bucket
4. Set bucket policy for public access
5. Create CloudFront distribution pointing to S3 bucket
6. Configure error pages to redirect to index.html

### Traditional Web Servers

#### Apache
Upload dist contents and create/update `.htaccess` with rewrite rules to handle SPA routing.

#### Nginx
Upload dist contents and update nginx configuration with location block using `try_files $uri $uri/ /index.html;` to support client-side routing.

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L28-L202)

## Server Configuration

### Single Page Application Support

This is a Single Page Application (SPA) using client-side routing. Your web server must redirect all requests to `index.html` to ensure proper routing functionality.

### MIME Types

Ensure your server is configured with proper MIME types:
- `.html` → `text/html`
- `.js` → `application/javascript`
- `.css` → `text/css`
- `.json` → `application/json`
- `.png`, `.jpg`, `.jpeg` → `image/*`
- `.svg` → `image/svg+xml`
- `.woff`, `.woff2` → `font/*`

### Caching Strategy

Recommended cache headers:
- **Versioned assets**: `Cache-Control: public, max-age=31536000, immutable`
- **index.html**: `Cache-Control: no-cache`

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L203-L233)

## Security Considerations

### HTTPS Configuration

Always use HTTPS in production. Free SSL certificates are available from:
- [Let's Encrypt](https://letsencrypt.org/)
- [Cloudflare](https://www.cloudflare.com/)
- Your hosting provider

### Security Headers

Add these headers for enhanced security:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

These headers help protect against common web vulnerabilities and ensure secure content delivery.

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L234-L253)

## Performance Optimization

### CDN Integration

For optimal performance, serve assets through a CDN such as:
- Cloudflare
- AWS CloudFront
- Fastly
- Google Cloud CDN

CDNs improve load times by serving content from locations closer to users.

### Compression

Enable gzip or brotli compression for text assets (HTML, CSS, JS) to reduce file sizes and improve load performance.

### Monitoring

Set up monitoring to track:
- Page load times
- Error rates
- Visitor analytics
- Server uptime

Monitoring helps ensure the application performs well and issues can be quickly identified.

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L254-L275)

## Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] All three languages work correctly (Arabic, English, Turkish)
- [ ] RTL layout displays properly for Arabic
- [ ] All images and assets load correctly
- [ ] Navigation works on all pages
- [ ] Countdown timer functions correctly
- [ ] Google Maps integration works
- [ ] QR codes display properly
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] HTTPS is enabled
- [ ] Custom domain is configured (if applicable)
- [ ] Analytics are tracking (if configured)
- [ ] Error monitoring is active (if configured)

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L276-L291)

## Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check browser console for errors. Common causes:
- Incorrect base path configuration
- CORS issues with assets
- Missing SPA redirect configuration

### Issue: 404 errors on page refresh

**Solution**: Configure your server to redirect all requests to index.html (see SPA configuration)

### Issue: Fonts or images not loading

**Solution**: 
- Verify MIME types are configured correctly
- Check CORS headers if serving from different domain
- Ensure all files from dist/ are uploaded

### Issue: Arabic text not displaying correctly

**Solution**:
- Ensure UTF-8 encoding is configured
- Verify font files are loaded correctly
- Check that RTL CSS is not being blocked

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L292-L318)

## Support and Resources

For deployment issues or questions:
- Review the [README.md](README.md) for project documentation
- Check the [CHANGELOG.md](CHANGELOG.md) for known issues
- Consult your hosting provider's documentation

Additional Resources:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/guides/deployment)
- [MDN Web Server Configuration](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)

**Section sources**
- [DEPLOYMENT.md](file://DEPLOYMENT.md#L319-L335)