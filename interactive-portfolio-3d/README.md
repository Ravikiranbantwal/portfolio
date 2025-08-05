# Interactive Portfolio 3D

A stunning interactive portfolio website featuring immersive 3D animations, particle effects, and modern web technologies. Built with React, TypeScript, and Three.js.

## ✨ Features

### 🎨 Visual Effects
- **Immersive 3D Hero Section** with interactive geometric shapes and particle systems
- **Real-time Particle Fields** with dynamic movement and color-changing effects
- **Floating 3D Elements** with realistic physics and smooth animations
- **Post-processing Effects** including bloom, chromatic aberration, and vignette
- **Responsive 3D Scenes** that adapt to mouse movement and screen size

### 🚀 Modern Animations
- **Framer Motion Integration** for smooth page transitions and micro-interactions
- **Scroll-triggered Animations** using Intersection Observer API
- **Staggered Animations** for lists and grids
- **Hover Effects** with 3D transformations and scaling
- **Loading States** with animated dots and progress indicators

### 📱 Responsive Design
- **Mobile-first Approach** with breakpoint-specific optimizations
- **Touch-friendly Interface** with appropriate gesture handling
- **Adaptive 3D Performance** with device-specific rendering settings
- **Progressive Enhancement** for different device capabilities

### 🎯 Interactive Elements
- **3D Navigation** with smooth scrolling and active state indicators
- **Project Showcase** with category filtering and detailed view
- **Skills Visualization** with animated progress bars and proficiency levels
- **Contact Form** with 3D background effects and real-time validation
- **Social Media Integration** with branded hover effects

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development with advanced patterns
- **Vite** - Fast build tool with HMR and optimized bundling
- **Three.js** - 3D graphics library for WebGL rendering

### 3D & Animation Libraries
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions for R3F
- **@react-three/postprocessing** - Post-processing effects
- **Framer Motion** - Production-ready motion library
- **React Spring** - Spring-physics based animations

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Lucide React** - Beautiful & consistent icon library
- **React Hot Toast** - Lightweight toast notifications

### Development Tools
- **ESLint** - Code linting with TypeScript rules
- **PostCSS** - CSS processing with Tailwind integration
- **TypeScript Config** - Strict type checking and path mapping

## 📁 Project Structure

```
src/
├── components/
│   ├── 3d/                    # Three.js components
│   │   ├── Scene.tsx          # Main 3D scene wrapper
│   │   ├── GeometricShapes.tsx # Interactive 3D shapes
│   │   ├── ParticleField.tsx   # Particle system
│   │   └── FloatingCubes.tsx   # Animated cube elements
│   ├── animations/            # Animation utilities
│   ├── layout/               # Layout components
│   │   └── Navigation.tsx    # Main navigation
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx   # 3D hero with intro
│   │   ├── AboutSection.tsx  # About with floating elements
│   │   ├── ProjectsSection.tsx # Project showcase
│   │   ├── SkillsSection.tsx # Skills with progress bars
│   │   ├── ExperienceSection.tsx # Timeline view
│   │   └── ContactSection.tsx # Contact form with 3D bg
│   └── ui/                   # Reusable UI components
├── data/                     # Static data and content
│   └── portfolio.ts          # Portfolio data and content
├── hooks/                    # Custom React hooks
├── styles/                   # Global styles and CSS
│   └── globals.css          # Tailwind imports and custom CSS
├── types/                    # TypeScript type definitions
│   └── index.ts             # All project types
├── utils/                    # Utility functions
│   └── index.ts             # Helper functions and constants
├── App.tsx                   # Main app component
└── main.tsx                  # React app entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd interactive-portfolio-3d
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5001`

### Available Scripts

- `npm run dev` - Start development server on port 5001
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run type-check` - TypeScript type checking

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/portfolio.ts`:
- Name, title, and bio
- Contact information and social links
- Years of experience and project counts

### Projects
Add your projects to the `projects` array in `src/data/portfolio.ts`:
- Project details and descriptions
- Technologies used
- Live URLs and GitHub links
- Categories and tags

### Skills
Customize your skills in the `skills` array:
- Skill names and proficiency levels
- Categories and colors
- Years of experience

### Experience
Update your work history in the `experiences` array:
- Company names and positions
- Achievements and technologies
- Date ranges and locations

### Theme & Colors
Modify the design system in `tailwind.config.js`:
- Primary and accent colors
- Typography and spacing
- Animation timings and easing

### 3D Scene Configuration
Customize 3D elements in the component files:
- Particle counts and colors
- Geometric shapes and materials
- Camera positions and controls
- Post-processing effects

## 🎯 Performance Optimization

### Implemented Optimizations
- **Lazy Loading** - Sections loaded on demand
- **Code Splitting** - Chunked bundles for faster loading
- **3D Performance** - Level-of-detail and instanced rendering
- **Image Optimization** - Responsive images with proper sizing
- **Bundle Analysis** - Manual chunks for optimal loading

### Performance Monitoring
- Monitor Three.js render performance
- Check bundle sizes with `npm run build`
- Test on various devices and network conditions
- Use browser dev tools for performance profiling

## 📱 Browser Support

- **Modern Browsers** - Chrome 88+, Firefox 85+, Safari 14+
- **WebGL Support** - Required for 3D features
- **ES6 Features** - Modern JavaScript support needed
- **Mobile Browsers** - iOS Safari 14+, Chrome Mobile 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** - For the amazing 3D graphics library
- **React Three Fiber** - For the excellent React integration
- **Framer Motion** - For smooth and powerful animations
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library

## 📞 Contact

Alex Thompson - alex@example.com

Project Link: [https://github.com/alexthompson/interactive-portfolio-3d](https://github.com/alexthompson/interactive-portfolio-3d)

---

⭐ **Star this repository if you found it helpful!**