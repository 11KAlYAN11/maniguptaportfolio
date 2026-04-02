# Development Guide

## 📚 Technology Stack

- **Framework**: Next.js 14 (React meta-framework)
- **Language**: TypeScript (JavaScript with types)
- **Styling**: Tailwind CSS (utility-first CSS)
- **Icons**: Lucide React (SVG icons)
- **Package Manager**: npm
- **Node Version**: 18+

## 🏗️ Architecture

### Next.js App Router
```
app/
├── layout.tsx    # Root layout (wraps all pages)
├── page.tsx      # Main homepage
└── globals.css   # Global styles
```

### Component Structure
```
components/
├── Header.tsx      # Navigation & mobile menu
├── Hero.tsx        # Hero section
├── About.tsx       # About section
├── Skills.tsx      # Skills & proficiency
├── Experience.tsx  # Work experience
├── Projects.tsx    # Project showcases
├── Education.tsx   # Education & certs
├── Contact.tsx     # Contact form
└── Footer.tsx      # Footer
```

## 🎨 Styling System

### Tailwind CSS Classes
- **Colors**: `text-white`, `bg-blue-500`, `border-gray-700`
- **Spacing**: `p-4` (padding), `m-2` (margin), `gap-3` (gap)
- **Flex**: `flex`, `flex-col`, `justify-center`, `items-center`
- **Grid**: `grid`, `grid-cols-1`, `md:grid-cols-2`
- **Responsive**: `md:`, `lg:`, `sm:` prefixes

### Custom Classes
- `.card` - Card component styling
- `.gradient-text` - Gradient text effect
- `.skill-badge` - Skill badge styling
- `.button` - Button styling

### Color Scheme
- **Primary**: `#0f172a` (dark blue)
- **Secondary**: `#1e293b` (slate)
- **Accent**: `#3b82f6` (blue)
- **Gradient**: Blue to Purple

## 🔄 Component Communication

### Props Pattern
```tsx
interface ComponentProps {
  title: string
  items: Array<{ id: string; name: string }>
}

export default function Component({ title, items }: ComponentProps) {
  return <div>{title}</div>
}
```

### State Management
Using React hooks for local state:
```tsx
'use client' // Client component directive for hooks

import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## 📝 Content Management

### Updating Skills
Edit `components/Skills.tsx`:
```tsx
const skillCategories = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'JavaScript'], // Add/remove here
  },
  // ...
]
```

### Updating Projects
Edit `components/Projects.tsx`:
```tsx
const projects = [
  {
    title: 'Project Name',
    description: 'Description',
    tech: ['Tech1', 'Tech2'],
    highlights: ['Highlight 1', 'Highlight 2'],
    github: 'https://github.com/...',
  },
  // ...
]
```

### Updating Experience
Edit `components/Experience.tsx`:
```tsx
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    location: 'City, Country',
    duration: 'Start – End',
    highlights: ['Highlight 1', 'Highlight 2'],
  },
  // ...
]
```

## 🎯 Adding New Sections

### Step 1: Create Component
```tsx
// components/NewSection.tsx
export default function NewSection() {
  return (
    <section id="newsection" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          New Section
        </h2>
        {/* Content here */}
      </div>
    </section>
  )
}
```

### Step 2: Import in Page
```tsx
// app/page.tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <>
      {/* ... existing sections */}
      <NewSection />
    </>
  )
}
```

### Step 3: Add to Navigation
```tsx
// components/Header.tsx
const navItems = [
  // ... existing items
  { label: 'New Section', href: '#newsection' },
]
```

## 🎬 Animations

### Tailwind Animations
```tsx
<div className="animate-fadeIn">Fade in on load</div>
<div className="animate-slideInUp">Slide up on load</div>
<div className="animate-bounce">Bounce animation</div>
```

### Custom CSS Animations
Defined in `app/globals.css`:
- `fadeIn` - Fade in from transparent
- `slideInUp` - Slide up from below

### Hover Effects
```tsx
<div className="hover:shadow-lg hover:scale-105 transition-all">
  Hover to scale up
</div>
```

## 🔗 Internal Navigation

### Link Component
```tsx
import Link from 'next/link'

<Link href="#about">Go to About</Link>
<Link href="/">Home Page</Link>
<Link href="https://external.com" target="_blank">External</Link>
```

## 🌐 External Links

### Social Links
Update in `components/Contact.tsx` and `components/Footer.tsx`:
```tsx
<Link href="https://github.com/USERNAME" target="_blank">GitHub</Link>
<Link href="https://linkedin.com/in/USERNAME" target="_blank">LinkedIn</Link>
```

## 📱 Responsive Design

### Breakpoints
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

### Example
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

## ⚙️ Configuration Files

### `tsconfig.json`
TypeScript configuration
- Path aliases: `@/*` maps to root

### `tailwind.config.js`
Tailwind CSS customization
- Colors
- Breakpoints
- Animations
- Plugins

### `next.config.js`
Next.js configuration
- Image optimization
- Compression
- API routes

### `postcss.config.js`
CSS post-processing
- Tailwind CSS
- Autoprefixer

## 🔐 Environment Variables

### Local Development
Create `.env.local`:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (Vercel)
Add in Project Settings → Environment Variables

### Public vs Secret
- `NEXT_PUBLIC_*` - Available in browser (public)
- `*` - Server-only (secret)

## 🧪 Testing

### Run Linting
```bash
npm run lint
```

### Build Check
```bash
npm run build
```

### Local Testing
```bash
npm run dev
# Test in http://localhost:3000
```

## 🐛 Debugging Tips

### Browser DevTools
- Inspect elements
- Check console for errors
- Network tab for requests
- Performance tab for metrics

### React DevTools
- Install [React DevTools Extension](https://react-devtools-tutorial.vercel.app/)
- Inspect component tree
- Check props and state

### Network Requests
```tsx
// Use console.log to debug
console.log('data:', data)
console.error('error:', error)
```

## 📦 Adding Dependencies

### Install Package
```bash
npm install package-name
npm install --save-dev dev-package-name  # Dev dependency
```

### Update package.json
Automatically updates after `npm install`

### Popular Packages
- Icons: `lucide-react`
- Animations: `framer-motion`
- Form validation: `react-hook-form`
- UI Components: `shadcn/ui`

## 🚀 Performance Optimization

### Image Optimization
```tsx
import Image from 'next/image'

<Image
  src="/image.png"
  alt="Description"
  width={400}
  height={300}
  priority // Load immediately
/>
```

### Code Splitting
Next.js automatic, use `dynamic` for manual:
```tsx
import dynamic from 'next/dynamic'

const Component = dynamic(() => import('./Component'))
```

### Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
# Configure in next.config.js
```

## 📚 Resources

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org
- **Lucide Icons**: https://lucide.dev

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Make changes
3. Test locally: `npm run dev`
4. Commit: `git commit -am "Add feature"`
5. Push: `git push origin feature/name`
6. Create Pull Request

---

**Happy coding!** 🚀
