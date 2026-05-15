# Portfolio Website - Setup Instructions

## 📁 Current File Structure

All the component and configuration files have been created in the `c:\Users\user\Desktop\Agent trial code` directory. They need to be organized into the proper project structure.

## 🔧 Setup Steps

### Step 1: Create Project Structure

Navigate to the portfolio directory and create the following folder structure:

```bash
cd "c:\Users\user\Desktop\Agent trial code"

# Create src directory and subdirectories
mkdir src
mkdir src\components
mkdir src\pages
mkdir src\context
mkdir src\styles
```

### Step 2: Organize Files

Move the files to their proper locations:

```bash
# Move components
move Navbar.tsx src\components\
move Footer.tsx src\components\
move Hero.tsx src\components\
move AnimatedButton.tsx src\components\
move SocialLinks.tsx src\components\
move ContactForm.tsx src\components\

# Move pages (create pages/Home, About, Profile, ProofOfWork, Contact files)
move Home.tsx src\pages\
move About.tsx src\pages\
move Profile.tsx src\pages\
move ProofOfWork.tsx src\pages\
move Contact.tsx src\pages\

# Move context
move ThemeContext.tsx src\context\

# Move styles
move globals.css src\styles\

# Move main application files
move App.tsx src\
move main.tsx src\

# Configuration files stay in root
# These are already in the right place:
# - vite.config.ts
# - tailwind.config.js
# - postcss.config.js
# - tsconfig.json
# - tsconfig.node.json
# - index.html
# - package.json (from portfolio-package.json)
```

### Step 3: Update package.json

The `portfolio-package.json` has all the dependencies. Rename it to `package.json`:

```bash
ren portfolio-package.json package.json
```

### Step 4: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- React Router
- Framer Motion
- Tailwind CSS
- React Icons
- React Hook Form
- TypeScript
- Vite
- And other dev dependencies

### Step 5: Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000` with hot-reload enabled.

## 📝 File Quick Reference

### Components (`src/components/`)

| File | Purpose |
|------|---------|
| `Navbar.tsx` | Navigation bar with theme toggle and mobile menu |
| `Footer.tsx` | Footer with social links and quick navigation |
| `Hero.tsx` | Reusable hero section component |
| `AnimatedButton.tsx` | Animated button with multiple variants |
| `SocialLinks.tsx` | Social media icon links |
| `ContactForm.tsx` | Contact form with validation |

### Pages (`src/pages/`)

| File | Purpose | Route |
|------|---------|-------|
| `Home.tsx` | Landing page with hero and featured projects | `/` |
| `About.tsx` | About me, skills, and tech stack | `/about` |
| `Profile.tsx` | Experience, education, and CV info | `/profile` |
| `ProofOfWork.tsx` | Project showcase and testimonials | `/proof-of-work` |
| `Contact.tsx` | Contact form and contact information | `/contact` |

### Context (`src/context/`)

| File | Purpose |
|------|---------|
| `ThemeContext.tsx` | Light/dark mode state management |

### Styles (`src/styles/`)

| File | Purpose |
|------|---------|
| `globals.css` | Global styles and animations |

### Root (`src/`)

| File | Purpose |
|------|---------|
| `App.tsx` | Main routing configuration |
| `main.tsx` | React entry point |

## 🎯 What's Included

✅ **Complete React Setup**
- Vite configuration for fast development
- TypeScript setup with strict mode
- React 18 with hooks

✅ **Styling**
- Tailwind CSS with custom Teal theme
- Ubuntu font family
- Dark mode support
- Responsive design utilities

✅ **Animations**
- Framer Motion animations on all pages
- Smooth transitions between pages
- Hover effects on interactive elements
- Scroll-triggered animations

✅ **5 Complete Pages**
- Home: Hero section with featured projects
- About: Skills showcase with tech stack
- Profile: Resume and work history
- Proof of Work: Project portfolio
- Contact: Contact form and information

✅ **Features**
- Light/dark mode toggle
- Fully responsive design
- Contact form with validation
- Social media integration
- Smooth navigation
- Beautiful animations throughout

## 🚀 Next Steps After Setup

### 1. Customize Your Information

Edit these files to add your personal details:

- **`src/pages/Home.tsx`** - Update your introduction and featured projects
- **`src/pages/About.tsx`** - Add your personal story and real skills
- **`src/pages/Profile.tsx`** - Update your experience and education
- **`src/pages/ProofOfWork.tsx`** - Add your actual projects with real descriptions
- **`src/pages/Contact.tsx`** - Update email, phone, and location
- **`src/components/SocialLinks.tsx`** - Add your real social media URLs

### 2. Add Your Projects

In `src/pages/ProofOfWork.tsx`, replace the placeholder projects with your actual work:
- Add real project images or screenshots
- Update project descriptions
- Add links to GitHub repositories and live demos

### 3. Setup Contact Form

In `src/pages/Contact.tsx`, you can integrate with:

**Option A: Formspree**
1. Visit [formspree.io](https://formspree.io)
2. Create a form endpoint
3. Update the form action in `Contact.tsx`

**Option B: EmailJS**
1. Visit [emailjs.com](https://emailjs.com)
2. Create an account and service
3. Install: `npm install @emailjs/browser`
4. Add integration code to `ContactForm.tsx`

**Option C: Backend API**
- Create your own Node.js/Express backend to handle form submissions

### 4. Deploy Your Portfolio

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Other Options:**
- GitHub Pages
- Firebase Hosting
- AWS Amplify
- Azure Static Web Apps

## 🎨 Customization Ideas

1. **Change Color Scheme**
   - Edit `tailwind.config.js` and update the Teal color values
   - Change `#14B8A6` to your preferred color throughout

2. **Add More Pages**
   - Create new files in `src/pages/`
   - Add routes to `src/App.tsx`
   - Add navigation links in `src/components/Navbar.tsx`

3. **Add a Blog**
   - Create a blog page and posts system
   - Use markdown or Contentful CMS

4. **Add More Animations**
   - Use Framer Motion's advanced features
   - Add page transition animations
   - Add scroll parallax effects

5. **Add Analytics**
   - Integrate Google Analytics or Plausible
   - Track user interactions

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Router Docs](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

## ✅ Checklist

- [ ] Files organized into proper folder structure
- [ ] `package.json` renamed from `portfolio-package.json`
- [ ] Dependencies installed with `npm install`
- [ ] Development server running with `npm run dev`
- [ ] All pages accessible and functioning
- [ ] Dark mode toggle working
- [ ] Contact form working
- [ ] Personal information updated
- [ ] Projects added and displayed
- [ ] Ready for deployment

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Dependencies not installing?**
```bash
npm cache clean --force
rm -r node_modules
npm install
```

**Styles not applying?**
- Restart the dev server
- Clear browser cache
- Check that Tailwind config is correct

**Build failing?**
```bash
npm run build -- --debug
```

---

**You're all set! Your portfolio website is ready to customize and deploy! 🎉**
