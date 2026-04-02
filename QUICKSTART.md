# 🚀 Quick Start Guide

Get your portfolio running locally in 3 minutes!

## Prerequisites

Make sure you have installed:
- **Node.js** (v18 or later) - [Download](https://nodejs.org)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download](https://git-scm.com)

Verify installation:
```bash
node --version  # Should be 18+
npm --version   # Should be 9+
git --version   # Should be installed
```

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd /path/to/maniguptaportfolio
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages listed in `package.json`.

**First time install may take 2-3 minutes.**

### 3. Start Development Server
```bash
npm run dev
```

You should see:
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000

Ready in 1.5s
```

### 4. Open in Browser
Visit: [http://localhost:3000](http://localhost:3000)

✅ Your portfolio is now running!

---

## Available Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production build
npm start

# Run linting
npm run lint
```

## Project Structure

```
maniguptaportfolio/
├── app/
│   ├── layout.tsx       # Page wrapper
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About me
│   ├── Skills.tsx       # Skills
│   ├── Experience.tsx   # Work history
│   ├── Projects.tsx     # Projects
│   ├── Education.tsx    # Education
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind config
├── tsconfig.json        # TypeScript config
└── next.config.js       # Next.js config
```

## Making Changes

### Edit Content
- Component files are in `components/` folder
- Each section is a separate component
- Changes auto-reload in browser

### Edit Styling
- **Component styles**: In component files
- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.js`

### Update Personal Info
Edit these components with your information:
1. **Hero section**: `components/Hero.tsx`
2. **About section**: `components/About.tsx`
3. **Skills section**: `components/Skills.tsx`
4. **Projects**: `components/Projects.tsx`
5. **Contact links**: `components/Contact.tsx`

## Hot Reload (Fast Refresh)

Changes to component files **auto-reload** in the browser without page refresh!

Try it:
1. Edit `components/Hero.tsx`
2. Change some text
3. Save file
4. Browser updates instantly ✨

## Debugging

### Browser Console
```bash
Press F12 or Right-click → Inspect → Console
```

### VS Code Debugging
1. Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension
2. Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "url": "http://localhost:3000"
    }
  ]
}
```
3. Start dev server: `npm run dev`
4. Press F5 to debug

## Common Issues

### Port 3000 Already in Use
```bash
# Kill process using port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Error
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Applied
1. Make sure Tailwind CSS is running
2. Check `tailwind.config.js` paths
3. Restart dev server

### Hot Reload Not Working
1. Restart dev server: Stop (Ctrl+C) and run `npm run dev` again
2. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

## Performance Tips

### Optimize Images
Use Next.js Image component instead of `<img>`:
```jsx
import Image from 'next/image'

<Image src="..." alt="..." width={100} height={100} />
```

### Code Splitting
Next.js automatically splits code - no extra work needed!

### Lazy Loading
```jsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Loading...</p>,
})
```

## Next Steps

1. ✅ Running locally
2. 📝 Update your information
3. 🎨 Customize colors and styling
4. 🚀 Deploy to Vercel (see DEPLOYMENT_GUIDE.md)

## Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **React Docs**: [react.dev](https://react.dev)
- **TypeScript Docs**: [typescriptlang.org](https://www.typescriptlang.org)

## Need Help?

Check these in order:
1. **Browser Console** (F12) for errors
2. **Terminal** for build errors
3. **GitHub Issues** for known problems
4. **Documentation** linked above

---

**Happy coding! 🎉**
