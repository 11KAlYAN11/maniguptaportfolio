# 🚀 Deployment Guide

This guide will help you deploy your portfolio to Vercel (recommended) or GitHub Pages.

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the best choice for Next.js apps - it's fast, free, and fully featured.

### Step 1: Push to GitHub

```bash
# First, ensure your changes are committed
git add .
git commit -m "Portfolio website setup"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"** (use your GitHub account)
3. Click **"New Project"**
4. Import your `maniguptaportfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**

✅ Your site is now live! Check the Vercel dashboard for your URL.

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard → **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your custom domain (e.g., `manigupta.dev`)
4. Follow DNS instructions for your domain provider
5. Wait for DNS propagation (usually 24 hours)

### Custom Domain Providers:
- **Namecheap**: Popular and affordable
- **GoDaddy**: Well-known domain registrar
- **Google Domains**: Simple management
- **Cloudflare**: Great DNS features

---

## Option 2: Deploy to GitHub Pages

GitHub Pages is free and integrates with GitHub.

### Step 1: Update Configuration

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/maniguptaportfolio', // Change if repo name is different
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Build Locally

```bash
npm run build
```

The `out/` folder now contains static files.

### Step 3: Deploy

```bash
# Option A: Manual push
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin main

# Then enable GitHub Pages:
# 1. Go to repository Settings → Pages
# 2. Select "Deploy from a branch"
# 3. Choose branch: "main", folder: "/root"
# 4. Click Save
```

✅ Your site is now live at: `https://username.github.io/maniguptaportfolio`

---

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Verify all external links work
- [ ] Check SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Verify social media links
- [ ] Check email links

## Performance Testing

### Vercel Analytics
- Built-in Web Vitals monitoring
- Real User Monitoring (RUM)
- Performance insights

### Google Lighthouse
1. Open your site in Chrome
2. Right-click → **Inspect**
3. Click **Lighthouse** tab
4. Click **Analyze page load**

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

## Maintenance

### Update Content
1. Edit component files
2. Commit changes: `git commit -am "Update content"`
3. Push: `git push origin main`
4. Vercel auto-deploys on push!

### Monitor Performance
- Vercel Dashboard: View analytics
- Error logs: Check deployment logs
- Real user metrics: Track user experience

## Troubleshooting

### Site not showing up
- Wait 2-5 minutes for initial deployment
- Hard refresh browser (Ctrl+Shift+R)
- Check Vercel deployment logs

### Custom domain not working
- Verify DNS records were added
- Wait up to 48 hours for propagation
- Use [DNS Checker](https://dnschecker.org)

### Build failing
- Check build logs in Vercel
- Ensure Node version is 18+
- Run `npm run build` locally to debug

### Contact form not working
- Verify mailto links by testing manually
- Check browser console for errors
- Ensure form fields are valid

## Environment Variables

### For Vercel
1. Go to **Project Settings** → **Environment Variables**
2. Add any needed variables (none required for this project)
3. Redeploy after adding

### Local Development
1. Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

2. Never commit sensitive data!

## Continuous Deployment

### Vercel (Automatic)
Every push to main automatically deploys.

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml` for custom deployments.

## Rollback

### Vercel
1. Go to **Deployments**
2. Click **•••** on previous deployment
3. Select **Promote to Production**

### GitHub Pages
Push a previous commit:
```bash
git revert <commit-hash>
git push origin main
```

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org](https://nextjs.org)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

**Congratulations! Your portfolio is now live! 🎉**
