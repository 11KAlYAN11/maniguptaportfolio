# 📚 Documentation Index

Welcome! Here's a guide to all the documentation in this portfolio project.

## 🚀 Getting Started (Pick Your Path)

### I just cloned this repository
→ Start with **[QUICKSTART.md](./QUICKSTART.md)**
- Explains how to install dependencies
- How to run locally
- First-time setup

### I want to deploy the website
→ Read **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**
- Deployment to Vercel (recommended)
- Deployment to GitHub Pages
- Custom domain setup
- Post-deployment checklist

### I want to customize the content
→ Check **[DEVELOPMENT.md](./DEVELOPMENT.md)**
- How to edit content
- Component structure
- Adding new sections
- Styling system

### I want to understand the project structure
→ Read **[README.md](./README.md)**
- Project overview
- Features list
- Tech stack
- Build commands

## 📄 File Guide

### Configuration Files
```
package.json          - Dependencies and scripts
tsconfig.json         - TypeScript settings
tailwind.config.js    - Tailwind CSS customization
next.config.js        - Next.js settings
postcss.config.js     - CSS processing
vercel.json           - Vercel deployment config
.gitignore            - Git ignore rules
.env.example          - Environment variables template
```

### Source Code
```
app/
├── layout.tsx         - Root page layout
├── page.tsx           - Main homepage
└── globals.css        - Global styles

components/
├── Header.tsx         - Navigation menu
├── Hero.tsx           - Hero/introduction section
├── About.tsx          - About me section
├── Skills.tsx         - Technical skills
├── Experience.tsx     - Work experience
├── Projects.tsx       - Project portfolio
├── Education.tsx      - Education & certifications
├── Contact.tsx        - Contact form & info
└── Footer.tsx         - Footer
```

### Documentation
```
README.md              - Project overview
QUICKSTART.md          - Quick setup guide
DEPLOYMENT_GUIDE.md    - Deployment instructions
DEVELOPMENT.md         - Development guide
INDEX.md               - This file
```

### GitHub
```
.github/
└── workflows/
    └── ci.yml         - GitHub Actions CI/CD
```

## 🎯 Common Tasks

### Update My Information
1. Open `components/Hero.tsx` - Update introduction
2. Open `components/About.tsx` - Update about section
3. Open `components/Skills.tsx` - Update skills
4. Open `components/Experience.tsx` - Update job history
5. Open `components/Projects.tsx` - Update projects
6. Open `components/Contact.tsx` - Update contact info
7. Run `npm run dev` to see changes

### Change Colors & Styling
1. Edit `tailwind.config.js` for color scheme
2. Edit `app/globals.css` for global styles
3. Edit individual component files for specific styling
4. Save and watch browser auto-reload

### Add a New Section
1. Create `components/NewSection.tsx`
2. Import it in `app/page.tsx`
3. Add navigation link in `components/Header.tsx`
4. Follow examples from existing sections

### Deploy to Production
1. Push changes to GitHub: `git push origin main`
2. Follow **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**
3. For Vercel: Connect repo and auto-deploy
4. For GitHub Pages: Follow static export steps

### Fix Build Errors
1. Check `npm run build` output
2. Look at **[DEVELOPMENT.md](./DEVELOPMENT.md)** troubleshooting
3. Check terminal for specific error messages
4. Search [Next.js docs](https://nextjs.org/docs)

## 🔍 Quick Reference

### Common Commands
```bash
npm install              # Install dependencies
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push origin main     # Push to GitHub
```

### Useful Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Help](https://docs.github.com)

## 📊 Project Statistics

- **Components**: 9 (Header, Hero, About, Skills, Experience, Projects, Education, Contact, Footer)
- **Pages**: 1 (Home page with all sections)
- **Sections**: 8 (Home, About, Skills, Experience, Projects, Education, Contact, Footer)
- **Total Classes**: 50+
- **Animations**: 3 (fadeIn, slideInUp, bounce)
- **Responsive Breakpoints**: 4 (sm, md, lg, xl)

## 🎓 Learning Path

If you're new to web development, here's what to learn:

1. **HTML & CSS Basics**
   - Structure with semantic HTML
   - Styling with Tailwind CSS

2. **JavaScript/TypeScript**
   - Variables, functions, loops
   - Classes and objects
   - Async/await

3. **React & JSX**
   - Components and props
   - Hooks (useState, useEffect)
   - Event handling

4. **Next.js**
   - File-based routing
   - Server and client components
   - Image optimization

5. **Deployment**
   - Git basics
   - GitHub Pages / Vercel
   - Domain configuration

## ❓ FAQ

**Q: How do I add a new project?**
A: Edit `components/Projects.tsx` and add to the `projects` array.

**Q: How do I change the website colors?**
A: Edit `tailwind.config.js` colors section.

**Q: Can I use this for a different person?**
A: Yes! Just replace all personal information with theirs.

**Q: How do I add more content sections?**
A: Create a new component in `components/` and import it in `app/page.tsx`.

**Q: How do I make it my own domain?**
A: See DEPLOYMENT_GUIDE.md → Custom Domain section.

**Q: Is there a backend?**
A: No, this is a static site. Contact form uses mailto links.

**Q: Can I add a blog?**
A: Yes, create a `blog/` folder in `app/` and add blog routes.

**Q: How do I add dark mode toggle?**
A: Install `next-themes` and configure it in layout.

## 📞 Support

- **Documentation**: Read the relevant .md file first
- **GitHub Issues**: Check existing issues in the repo
- **Stack Overflow**: Search for specific error messages
- **Next.js Discord**: Community support

## 🔄 Workflow Cheat Sheet

```bash
# Initial setup
git clone https://github.com/manigupta/maniguptaportfolio.git
cd maniguptaportfolio
npm install

# Development
npm run dev              # Start dev server
# Make changes
# Browser auto-reloads

# Before pushing
npm run build            # Check build
npm run lint             # Check code quality

# Push changes
git add .
git commit -m "Update content"
git push origin main

# Deploy (Vercel auto-deploys on push)
# Or manually deploy to GitHub Pages

# Done! ✅
```

## 📈 Next Steps

1. ✅ Read QUICKSTART.md
2. ✅ Run `npm install` and `npm run dev`
3. ✅ Open http://localhost:3000
4. ✅ Edit components with your info
5. ✅ Read DEPLOYMENT_GUIDE.md
6. ✅ Deploy to Vercel
7. ✅ Share your portfolio!

---

## 🚀 You're All Set!

Start with [QUICKSTART.md](./QUICKSTART.md) and have fun building your portfolio!

**Questions?** Check [DEVELOPMENT.md](./DEVELOPMENT.md) or [README.md](./README.md)

---

*Last Updated: 2024*
