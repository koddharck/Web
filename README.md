# Personal Frontend Developer Portfolio

A modern, animated portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features light/dark mode, smooth animations, and responsive design.

## ✨ Features

- **Light & Dark Mode** - Theme toggle with localStorage persistence
- **Smooth Animations** - Powered by Framer Motion for professional interactions
- **Teal Color Scheme** - Modern, eye-catching design with custom Teal palette
- **Ubuntu Font** - Clean, modern typography throughout
- **Responsive Design** - Works beautifully on mobile, tablet, and desktop
- **Multiple Pages**:
  - Landing/Home - Hero section with featured projects
  - About - Personal story, skills, and tech stack
  - Profile - Resume, experience timeline, education
  - Proof of Work - Project showcase with 6 featured projects
  - Contact - Contact form with validation and social links
- **Accessibility** - Semantic HTML and ARIA labels
- **Performance** - Optimized with Vite for fast builds and load times

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Professional animations library
- **React Router** - Client-side routing
- **React Icons** - Beautiful icon library
- **Vite** - Lightning-fast build tool

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd "Agent trial code"
   ```

2. **Rename package.json:**
   ```bash
   ren portfolio-package.json package.json
   ```

3. **Organize the files into proper structure:**
   ```
   Create the following folders in the project root:
   - src/
     - components/
     - pages/
     - context/
     - styles/
   
   Move the files accordingly:
   - Components: Navbar.tsx, Footer.tsx, Hero.tsx, AnimatedButton.tsx, 
                 SocialLinks.tsx, ContactForm.tsx
   - Pages: Home.tsx, About.tsx, Profile.tsx, ProofOfWork.tsx, Contact.tsx
   - Context: ThemeContext.tsx
   - Styles: globals.css
   - Root: App.tsx, main.tsx, index.html
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎨 Customization

### Update Personal Information

Edit the following files to add your information:

- **`src/components/SocialLinks.tsx`** - Update social media links
- **`src/pages/Home.tsx`** - Update featured projects
- **`src/pages/About.tsx`** - Add your personal story and skills
- **`src/pages/Profile.tsx`** - Update experience and education
- **`src/pages/ProofOfWork.tsx`** - Add your actual projects
- **`src/pages/Contact.tsx`** - Update contact information
- **`src/components/Navbar.tsx`** - Change the site name/logo

### Color Customization

The Teal color scheme is defined in `tailwind.config.js`. To change colors:

1. Update the `colors.teal` object in `tailwind.config.js`
2. Replace `#14B8A6` with your desired primary color throughout
3. Adjust the color palette shades (50, 100, 200, etc.)

### Font Customization

To change from Ubuntu font:

1. Edit `src/styles/globals.css` - Update the Google Fonts import
2. Edit `tailwind.config.js` - Update the `fontFamily.ubuntu` setting
3. Replace all `font-ubuntu` classes with your new font utility class

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will open at `http://localhost:3000` and hot-reload as you make changes.

## 📦 Building for Production

Build the project:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Hero section component
│   ├── AnimatedButton.tsx   # Reusable animated button
│   ├── SocialLinks.tsx      # Social media icon links
│   └── ContactForm.tsx      # Contact form component
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # About me page
│   ├── Profile.tsx         # Resume/profile page
│   ├── ProofOfWork.tsx     # Portfolio/projects page
│   └── Contact.tsx         # Contact page
├── context/
│   └── ThemeContext.tsx    # Theme management (light/dark mode)
├── styles/
│   └── globals.css         # Global styles and imports
├── App.tsx                 # Main routing component
└── main.tsx                # Application entry point
```

## 🎯 Pages Overview

### Home
- Hero section with introduction
- CTA buttons to explore work or contact
- Featured projects preview
- Social media links

### About
- Personal biography
- Skills section organized by category (Frontend, Backend, Tools)
- Statistics section (projects, experience, clients, satisfaction)
- Tech stack showcase with icons

### Profile
- Professional experience timeline
- Education section
- Staggered animations on hover
- Call-to-action button to contact

### Proof of Work
- Grid of 6 featured projects
- Project cards with descriptions and tech tags
- Links to GitHub and live demos
- Testimonials section
- Project inquiry CTA

### Contact
- Contact form with validation
- Contact information (email, phone, location)
- Social media links
- Availability status
- Success message on submission

## 🎨 Animation Features

- **Fade & Slide Animations** - Elements fade in and slide from various directions
- **Hover Effects** - Buttons, cards, and links scale and transform on hover
- **Staggered Animations** - Multiple items animate in sequence for visual interest
- **Scroll Animations** - Elements animate as you scroll into view
- **Background Floating** - Subtle animated background elements
- **Theme Transitions** - Smooth transitions between light and dark mode

## 🌙 Dark Mode

The site includes a fully functional dark mode toggle:

- Click the sun/moon icon in the navbar to toggle
- Your preference is saved in localStorage
- All colors are optimized for both light and dark modes
- Smooth transitions between modes

## 📱 Responsive Breakpoints

- **Mobile** - < 768px (md)
- **Tablet** - 768px to 1024px (lg)
- **Desktop** - > 1024px

All pages are fully responsive and optimized for touch on mobile devices.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Other Platforms

The `dist` folder contains the production-ready build that can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips

- Replace the emoji placeholders in ProofOfWork page with actual project screenshots
- Update social media links with your real profiles
- Customize the projects section with your actual work
- Consider adding a blog section
- Add a newsletter signup form
- Integrate with EmailJS or Formspree for working contact form

## 📞 Support

For issues or questions, please create an issue in your repository.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS & Framer Motion**
