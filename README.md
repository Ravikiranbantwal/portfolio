# RaviKiran Bantwal - Portfolio

A modern, responsive portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

- **Main Portfolio**: [https://rkbantwal.netlify.app](https://rkbantwal.netlify.app)
- **Analytics Dashboard**: [https://analytics-dashboard-rkbantwal.netlify.app](https://analytics-dashboard-rkbantwal.netlify.app)
- **Gen Z Portfolio Demo**: [https://genz-portfolio-demo-rkbantwal.netlify.app](https://genz-portfolio-demo-rkbantwal.netlify.app)
- **South Indian Restaurant**: [https://south-indian-restaurant-rkbantwal.netlify.app](https://south-indian-restaurant-rkbantwal.netlify.app)
- **Interactive Portfolio 3D**: [https://interactive-portfolio-3d-rkbantwal.netlify.app](https://interactive-portfolio-3d-rkbantwal.netlify.app)
- **Neural News AI**: [https://ai-news-demo-rkbantwal.netlify.app](https://ai-news-demo-rkbantwal.netlify.app)

## 📁 Project Structure

```
portfolio/
├── src/                    # Main portfolio source code
│   ├── components/         # React components
│   ├── data/              # Static data (projects, skills, etc.)
│   └── styles/            # Global styles
├── analytics-dashboard/    # Separate analytics dashboard project
│   ├── src/               # Dashboard source code
│   └── netlify.toml       # Netlify configuration
├── genz-portfolio-demo/   # Gen Z portfolio demo project
│   ├── src/               # Demo source code with 3D animations
│   └── netlify.toml       # Netlify configuration
├── south-indian-restaurant/ # South Indian restaurant project
│   ├── src/               # Restaurant website source code
│   └── netlify.toml       # Netlify configuration
├── interactive-portfolio-3d/ # Interactive 3D portfolio project
│   ├── src/               # 3D portfolio source code
│   └── netlify.toml       # Netlify configuration
├── ai-news-demo/          # Neural News AI project
│   ├── src/               # AI news demo with neural networks and 3D effects
│   └── netlify.toml       # Netlify configuration
├── netlify.toml           # Netlify configuration for main portfolio
└── README.md              # This file
```

## 🛠️ Technologies Used

### Main Portfolio
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics and animations
- **GSAP** - Advanced animations
- **Framer Motion** - Component animations

### Analytics Dashboard
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **React Router** - Navigation
- **Lucide React** - Icons

### Interactive Portfolio 3D
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Component animations
- **Tailwind CSS** - Styling

### Gen Z Portfolio Demo
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Canvas Confetti** - Interactive effects
- **Tailwind CSS** - Styling

### South Indian Restaurant
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Hot Toast** - Notifications

### Neural News AI Demo
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and neural network effects
- **Framer Motion** - Component animations
- **GSAP** - Advanced animations
- **Canvas Confetti** - Interactive effects
- **Tailwind CSS** - Styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravikiranbantwal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies for main portfolio**
   ```bash
   npm install
   ```

3. **Install dependencies for all sub-projects**
   ```bash
   # Analytics Dashboard
   cd analytics-dashboard
   npm install
   cd ..
   
   # Gen Z Portfolio Demo
   cd genz-portfolio-demo
   npm install
   cd ..
   
   # South Indian Restaurant
   cd south-indian-restaurant
   npm install
   cd ..
   
   # Interactive Portfolio 3D
   cd interactive-portfolio-3d
   npm install
   cd ..
   
   # Neural News AI Demo
   cd ai-news-demo
   npm install
   cd ..
   ```

### Development

1. **Run main portfolio**
   ```bash
   npm run dev
   ```

2. **Run sub-projects**
   ```bash
   # Analytics Dashboard
   cd analytics-dashboard
   npm run dev
   cd ..
   
   # Gen Z Portfolio Demo
   cd genz-portfolio-demo
   npm run dev
   cd ..
   
   # South Indian Restaurant
   cd south-indian-restaurant
   npm run dev
   cd ..
   
   # Interactive Portfolio 3D
   cd interactive-portfolio-3d
   npm run dev
   cd ..
   
   # Neural News AI Demo
   cd ai-news-demo
   npm run dev
   cd ..
   ```

### Building for Production

1. **Build main portfolio**
   ```bash
   npm run build
   ```

2. **Build sub-projects**
   ```bash
   # Analytics Dashboard
   cd analytics-dashboard
   npm run build
   cd ..
   
   # Gen Z Portfolio Demo
   cd genz-portfolio-demo
   npm run build
   cd ..
   
   # South Indian Restaurant
   cd south-indian-restaurant
   npm run build
   cd ..
   
   # Interactive Portfolio 3D
   cd interactive-portfolio-3d
   npm run build
   cd ..
   
   # Neural News AI Demo
   cd ai-news-demo
   npm run build
   cd ..
   ```

## 🌐 Deployment

### Netlify Deployment

Both projects are configured for automatic deployment on Netlify:

1. **Main Portfolio**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment: Node.js 18

2. **Analytics Dashboard**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `analytics-dashboard`
   - Environment: Node.js 18

3. **Gen Z Portfolio Demo**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `genz-portfolio-demo`
   - Environment: Node.js 18

4. **South Indian Restaurant**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `south-indian-restaurant`
   - Environment: Node.js 18

5. **Interactive Portfolio 3D**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `interactive-portfolio-3d`
   - Environment: Node.js 18

6. **Neural News AI Demo**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: `ai-news-demo`
   - Environment: Node.js 18

### Manual Deployment

1. **Build all projects**
   ```bash
   # Build main portfolio
   npm run build
   
   # Build analytics dashboard
   cd analytics-dashboard
   npm run build
   cd ..
   
   # Build Gen Z Portfolio Demo
   cd genz-portfolio-demo
   npm run build
   cd ..
   
   # Build South Indian Restaurant
   cd south-indian-restaurant
   npm run build
   cd ..
   
   # Build Interactive Portfolio 3D
   cd interactive-portfolio-3d
   npm run build
   cd ..
   
   # Build Neural News AI Demo
   cd ai-news-demo
   npm run build
   cd ..
   ```

2. **Deploy to your preferred hosting service**

## 📋 Features

### Main Portfolio
- ✨ Modern, responsive design
- 🎨 Dark/light theme toggle
- 🎭 Smooth animations and transitions
- 📱 Mobile-first approach
- 🔍 SEO optimized
- ⚡ Fast loading times
- 🎯 Interactive project showcase

### Analytics Dashboard
- 📊 Real-time data visualization
- 📈 Interactive charts and graphs
- 🎨 Modern dashboard design
- 📱 Responsive layout
- 🌙 Dark/light theme support
- ⚡ Fast and performant

### Interactive Portfolio 3D
- 🎮 Advanced 3D animations and effects
- 🌐 Three.js powered graphics
- 🎯 Immersive user experience
- 📱 Responsive 3D design
- ⚡ Optimized performance
- 🎨 Smooth camera controls
- 🔄 Interactive 3D models

### Gen Z Portfolio Demo
- 🌟 Cyberpunk aesthetics and neon effects
- 🎭 Advanced animations with GSAP
- 🎨 Neon glow and hologram effects
- 📱 Mobile-responsive design
- ⚡ Fast loading with code splitting
- 🎯 Interactive particle systems
- 🌈 Confetti explosions and effects

### South Indian Restaurant
- 🍽️ Online food ordering system
- 📋 Menu management and display
- 🎨 Modern restaurant design
- 📱 Mobile-first responsive layout
- ⚡ Fast and intuitive interface
- 🎯 Table reservation system
- 🌟 Customer reviews and ratings

### Neural News AI Demo
- 🤖 AI-powered news intelligence system
- 🧠 Neural network visualizations and effects
- 🎮 Interactive 3D elements and animations
- 📊 Real-time sentiment analysis
- 🎨 Holographic card design with uniform sizing
- 📱 Responsive design with cyberpunk aesthetics
- ⚡ Advanced particle systems and effects

## 🎯 Project Showcase

The portfolio includes links to live demos of my projects:

- **Interactive Portfolio 3D** - Advanced 3D portfolio with Three.js animations and immersive experience
- **South Indian Restaurant** - Modern restaurant website with online ordering system
- **Gen Z Portfolio Demo** - Cyberpunk-themed portfolio with neon aesthetics and 3D effects
- **Analytics Dashboard** - A comprehensive analytics dashboard with real-time data visualization
- **Neural News AI Demo** - AI-powered news intelligence system with neural network effects
- **E-Commerce App** - Full-featured mobile e-commerce application
- **Design System** - Reusable component library and design tokens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: ravikiranbantwal@gmail.com
- **LinkedIn**: [RaviKiran Bantwal](https://linkedin.com/in/ravikiranbantwal)
- **GitHub**: [@ravikiranbantwal](https://github.com/ravikiranbantwal)

---

Made with ❤️ by RaviKiran Bantwal 