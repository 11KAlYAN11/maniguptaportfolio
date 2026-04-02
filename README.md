# Mani Gupta - Portfolio Website

Professional portfolio website built with modern web technologies, showcasing experience, skills, and projects.

## 🚀 Features

- **Modern Design**: Built with Next.js 14 and Tailwind CSS
- **Responsive**: Fully mobile-responsive and optimized for all devices
- **Fast Performance**: Optimized loading and rendering
- **SEO Friendly**: Meta tags and semantic HTML
- **Dark Mode**: Beautiful dark theme with gradient accents
- **Smooth Animations**: Fade-in and slide-up animations
- **Contact Form**: Integrated contact form with email functionality
- **Social Links**: Connected to GitHub, LinkedIn, and Email

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Professional summary and key strengths
- **Skills**: Technical skills with proficiency levels
- **Experience**: Professional work history and achievements
- **Projects**: Portfolio of key projects with descriptions
- **Education**: Academic background and certifications
- **Contact**: Contact information and contact form

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/manigupta/maniguptaportfolio.git
   cd maniguptaportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Visit the website**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
maniguptaportfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Project portfolio
│   ├── Education.tsx       # Education & certifications
│   ├── Contact.tsx         # Contact section & form
│   └── Footer.tsx          # Footer
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Deploy to GitHub Pages

For GitHub Pages deployment, additional configuration is needed. Create a `next.config.js` with:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/maniguptaportfolio',
}
module.exports = nextConfig
```

Then build and deploy:
```bash
npm run build
```

## 📝 Customization

### Update Personal Information
Edit the data in component files:
- **Header**: Navigation links in `components/Header.tsx`
- **Hero**: Introduction in `components/Hero.tsx`
- **Projects**: Project details in `components/Projects.tsx`
- **Contact**: Contact info in `components/Contact.tsx`

### Modify Styling
- **Colors**: Update in `tailwind.config.js`
- **Fonts**: Modify in `app/globals.css`
- **Animations**: Customize keyframes in `tailwind.config.js`

### Add New Sections
1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add it to the navigation in `components/Header.tsx`

## 🔧 Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic by Next.js
- **CSS Optimization**: Tailwind purging unused styles
- **Font Optimization**: System fonts for fast loading
- **Lazy Loading**: Components loaded on demand

## 🔒 Privacy & Security

- No backend server required
- No cookies or tracking
- Contact form uses mailto (client-side only)
- All data stays private

## 📞 Support

For questions or issues, reach out:
- **Email**: Mani.gupta.rg@gmail.com
- **GitHub**: [github.com/manigupta](https://github.com/manigupta)
- **LinkedIn**: [linkedin.com/in/mani-gupta-rg](https://linkedin.com/in/mani-gupta-rg)

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Project filtering by technology

---

Made with ❤️ by Mani Gupta
