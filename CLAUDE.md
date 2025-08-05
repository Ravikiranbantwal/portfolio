# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for RKBantwal (RaviKiran Bantwal), a Full Stack Developer. The project showcases Gen Z aesthetics with professional UX/UI design, featuring modern animations and responsive design. Built with React 18, TypeScript, and Vite, deployed on Netlify with Formspree integration for contact forms.

## Development Commands

```bash
# Core development
npm run dev          # Start development server on localhost:5173
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
npm run type-check   # TypeScript type checking without compilation

# Installation
npm install          # Install all dependencies
```

## Tech Stack & Architecture

### Frontend Framework
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Framer Motion** for component animations and page transitions
- **Tailwind CSS** with custom design system and utility classes

### Key Architecture Patterns

#### Data-Driven Content System
All portfolio content is centralized in `src/data/`:
- `personal.ts` - Personal information, contact details, social links
- `experience.ts` - Work history with achievements and technologies
- `skills.ts` - Technical skills with proficiency levels and SVG icons
- `projects.ts` - Project portfolio with filtering capabilities

#### Component Architecture
```
src/components/
├── layout/           # Header (sticky nav) and Footer
├── sections/         # Main page sections (Hero, About, Projects, etc.)
├── ui/              # Reusable UI components (planned)
└── animations/       # Animation utilities (planned)
```

#### Animation System
- **Framer Motion** variants for consistent animation patterns
- **Intersection Observer** for scroll-triggered animations
- **Custom CSS variables** for easing and timing consistency
- **Staggered animations** for list items and grids

#### Styling System
- **Tailwind CSS** with custom configuration in `tailwind.config.js`
- **CSS Custom Properties** in `src/styles/globals.css` for theming
- **Responsive utilities** with mobile-first approach
- **Design tokens** for colors, spacing, and typography

## Content Management

### Personal Data Updates
Update `src/data/personal.ts` to modify:
- Name, title, bio, contact information
- Social media links (GitHub, LinkedIn, email)
- Availability status and location

### Project Portfolio
In `src/data/projects.ts`:
- Each project has `id`, `title`, `description`, `technologies`, `category`
- Projects support filtering by category (`web`, `mobile`, `design`, `other`)
- Links for demo, GitHub, and Figma are optional

### Skills Management
In `src/data/skills.ts`:
- Skills are categorized: `frontend`, `backend`, `tools`, `design`
- Each skill has a proficiency level (0-100) for progress bars
- Supports both emoji icons and SVG icons with fallback
- Progress bars animate when section comes into view

### Experience Timeline
In `src/data/experience.ts`:
- Work experience with achievements arrays
- Technologies used at each position
- Current position flag for status indicators

## Form Integration

### Contact Form (Formspree)
- Integrated with Formspree (form ID: `xeozlwdw`)
- Success handling via URL parameters (`?success=true`)
- Form redirects to `#contact` section after submission
- Custom styling with validation states

## Deployment Configuration

### Netlify Setup
- `netlify.toml` configured for SPA routing and security headers
- Build command: `npm run build`
- Publish directory: `dist/`
- Node.js version: 18
- Cache headers for static assets (1 year)
- Security headers: X-Frame-Options, X-XSS-Protection, etc.

### Build Optimization
- TypeScript compilation before Vite build
- Tree shaking for unused code removal
- CSS purging via Tailwind
- Asset optimization and compression

## Performance Considerations

### Animation Performance
- Uses `will-change` properties for smooth animations
- Intersection Observer for scroll-triggered effects
- Debounced scroll events to prevent performance issues
- Lazy loading for heavy components

### Mobile Responsiveness
- Mobile-first design approach
- Custom responsive text utilities (`text-responsive-*`)
- Optimized touch targets and gestures
- Viewport meta tag for proper mobile scaling

## Development Notes

### State Management
- Local component state with React hooks
- No global state management needed (content is static)
- URL parameters for form success states

### Icon Strategy
- Lucide React for consistent icon library
- SVG icons with emoji fallbacks in skills section
- Icon optimization for bundle size

### Code Organization
- Consistent export patterns (default exports for components)
- TypeScript interfaces for all data structures
- Utility classes defined in `globals.css`
- Color system based on CSS custom properties

## Customization Guidelines

### Theme Modification
Primary colors defined in both `tailwind.config.js` and `src/styles/globals.css`:
- Primary: #6366f1 (Indigo)
- Secondary: #ec4899 (Pink) 
- Accent: #f59e0b (Amber)

### Animation Timing
Consistent animation values in CSS custom properties:
- `--duration-fast: 300ms`
- `--duration-normal: 500ms`
- `--duration-slow: 800ms`
- `--ease: cubic-bezier(0.4, 0, 0.2, 1)`