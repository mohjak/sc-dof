# Deployment Guide

This guide provides comprehensive instructions for deploying the Syrian Liberation Day Event Platform v1.0.0 to various hosting environments.

## 📦 Package Contents

The release package contains:
- `dist/` - Complete production build with optimized static assets
- `CHANGELOG.md` - Release notes and version history
- `DEPLOYMENT.md` - This deployment guide
- `README.md` - Project documentation

## 🚀 Quick Start

### Prerequisites

- A web server or hosting platform that can serve static files
- No server-side runtime required (PHP, Node.js, etc.)
- HTTPS is recommended but not required

### Basic Deployment Steps

1. Extract the release package
2. Upload the contents of the `dist/` directory to your web server
3. Configure your web server (see platform-specific guides below)
4. Access your website through your domain or hosting URL

## 🌐 Platform-Specific Deployment

### Netlify

**Method 1: Drag and Drop**
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag the `dist/` folder into the upload area
3. Your site will be deployed with a random subdomain
4. Optionally configure a custom domain in site settings

**Method 2: Netlify CLI**
```bash
npm install -g netlify-cli
cd dist
netlify deploy --prod
```

**Configuration**
Create `netlify.toml` in the dist directory:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

**Method 1: Vercel CLI**
```bash
npm install -g vercel
cd dist
vercel --prod
```

**Method 2: GitHub Integration**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

**Configuration**
Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### GitHub Pages

1. Create a new repository or use existing one
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Upload dist contents to the selected branch
5. Your site will be available at `https://username.github.io/repository-name`

**Important**: If deploying to a subdirectory, update the base path in `vite.config.ts` before building:
```typescript
export default defineConfig({
  base: '/repository-name/'
})
```

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Deploy:
```bash
firebase deploy
```

### AWS S3 + CloudFront

1. Create an S3 bucket
2. Enable static website hosting
3. Upload dist contents to the bucket
4. Set bucket policy for public access
5. Create CloudFront distribution pointing to S3 bucket
6. Configure error pages to redirect to index.html

**Bucket Policy Example**:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### Traditional Web Servers

#### Apache

1. Upload dist contents to document root (e.g., `/var/www/html`)
2. Create or update `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx

1. Upload dist contents to document root (e.g., `/usr/share/nginx/html`)
2. Update nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;
}
```

3. Restart Nginx:
```bash
sudo systemctl restart nginx
```

## ⚙️ Server Configuration

### Single Page Application Support

This is a Single Page Application (SPA) that uses client-side routing. Your web server must redirect all requests to `index.html`.

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

**For versioned assets** (files with hashes in names):
```
Cache-Control: public, max-age=31536000, immutable
```

**For index.html**:
```
Cache-Control: no-cache
```

## 🔒 Security Considerations

### HTTPS Configuration

Always use HTTPS in production. Free SSL certificates are available from:
- [Let's Encrypt](https://letsencrypt.org/)
- [Cloudflare](https://www.cloudflare.com/)
- Your hosting provider

### Security Headers

Add these headers for enhanced security:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## 📊 Performance Optimization

### CDN Integration

For optimal performance, serve assets through a CDN:
- Cloudflare
- AWS CloudFront
- Fastly
- Google Cloud CDN

### Compression

Enable gzip or brotli compression for text assets (HTML, CSS, JS).

### Monitoring

Set up monitoring to track:
- Page load times
- Error rates
- Visitor analytics
- Server uptime

## ✅ Post-Deployment Checklist

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

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check browser console for errors. Common causes:
- Incorrect base path configuration
- CORS issues with assets
- Missing SPA redirect configuration

### Issue: 404 errors on page refresh

**Solution**: Configure your server to redirect all requests to index.html (see SPA configuration above)

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

## 📞 Support

For deployment issues or questions:
- Review the [README.md](README.md) for project documentation
- Check the [CHANGELOG.md](CHANGELOG.md) for known issues
- Consult your hosting provider's documentation

## 📝 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/en/main/guides/deployment)
- [MDN Web Server Configuration](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)

---

Made with ❤️ for the Syrian Community
