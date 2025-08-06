export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'other';
  featured: boolean;
  links: {
    demo?: string;
    github?: string;
    figma?: string;
  };
  status: 'completed' | 'in-progress' | 'planned';
  year: number;
}

export const projects: Project[] = [
  {
    id: "interactive-portfolio-3d",
    title: "Interactive Portfolio 3D",
    description: "Stunning 3D portfolio with advanced animations and Three.js effects.",
    longDescription: "A cutting-edge interactive portfolio featuring advanced 3D animations, Three.js graphics, and immersive user experience. Built with React, TypeScript, Three.js, and Framer Motion. Includes 3D models, particle effects, smooth animations, and responsive design.",
    image: "/assets/images/projects/3d-portfolio-preview.jpg",
    images: [
      "/assets/images/projects/3d-portfolio-1.jpg",
      "/assets/images/projects/3d-portfolio-2.jpg",
      "/assets/images/projects/3d-portfolio-3.jpg"
    ],
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion", "React Three Fiber", "Tailwind CSS"],
    category: "web",
    featured: true,
    links: {
      demo: "https://interactive-portfolio-3d-rkbantwal.netlify.app",
      github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/interactive-portfolio-3d"
    },
    status: "completed",
    year: 2024
  },
  {
    id: "south-indian-restaurant",
    title: "South Indian Restaurant",
    description: "Modern restaurant website with online ordering and menu management.",
    longDescription: "A comprehensive restaurant website featuring online food ordering, menu management, table reservations, and customer reviews. Built with React, TypeScript, and modern web technologies. Includes responsive design, payment integration, and real-time order tracking.",
    image: "/assets/images/projects/restaurant-preview.jpg",
    images: [
      "/assets/images/projects/restaurant-1.jpg",
      "/assets/images/projects/restaurant-2.jpg",
      "/assets/images/projects/restaurant-3.jpg"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router", "React Hot Toast"],
    category: "web",
    featured: true,
    links: {
      demo: "https://south-indian-restaurant-rkbantwal.netlify.app",
      github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/south-indian-restaurant"
    },
    status: "completed",
    year: 2024
  },
  {
    id: "genz-portfolio-demo",
    title: "Gen Z Portfolio Demo",
    description: "Next-generation portfolio with cyberpunk aesthetics and 3D animations.",
    longDescription: "A cutting-edge portfolio demo featuring neon aesthetics, cyberpunk vibes, and interactive 3D elements. Built with React, Three.js, Framer Motion, and GSAP. Features include floating 3D geometry, particle systems, confetti explosions, and cyberpunk design language.",
    image: "/assets/images/projects/genz-demo-preview.jpg",
    images: [
      "/assets/images/projects/genz-demo-1.jpg",
      "/assets/images/projects/genz-demo-2.jpg",
      "/assets/images/projects/genz-demo-3.jpg"
    ],
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion", "GSAP", "Tailwind CSS", "Canvas Confetti"],
    category: "web",
    featured: true,
    links: {
      demo: "https://genz-portfolio-demo-rkbantwal.netlify.app",
      github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/genz-portfolio-demo"
    },
    status: "completed",
    year: 2024
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A beautiful and responsive analytics dashboard with real-time data visualization.",
    longDescription: "Built with React, TypeScript, and Chart.js, this dashboard features real-time data updates, customizable widgets, and a clean, modern design. Includes dark/light mode, responsive layout, and interactive charts.",
    image: "/assets/images/projects/dashboard-preview.jpg",
    images: [
      "/assets/images/projects/dashboard-1.jpg",
      "/assets/images/projects/dashboard-2.jpg",
      "/assets/images/projects/dashboard-3.jpg"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Framer Motion"],
    category: "web",
    featured: true,
    links: {
      demo: "https://analytics-dashboard-rkbantwal.netlify.app",
      github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/analytics-dashboard"
    },
    status: "completed",
    year: 2024
  },
  {
    id: "ai-news-demo",
    title: "AI News Demo",
    description: "Modern news application with AI-powered content and interactive features.",
    longDescription: "A cutting-edge news application featuring AI-powered content curation, interactive 3D elements, and modern UI/UX. Built with React, TypeScript, Three.js, and Framer Motion. Includes 3D animations, particle effects, and responsive design.",
    image: "/assets/images/projects/ai-news-preview.jpg",
    images: [
      "/assets/images/projects/ai-news-1.jpg",
      "/assets/images/projects/ai-news-2.jpg",
      "/assets/images/projects/ai-news-3.jpg"
    ],
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion", "GSAP", "Tailwind CSS", "Canvas Confetti"],
    category: "web",
    featured: true,
    links: {
      demo: "https://ai-news-demo-rkbantwal.netlify.app",
      github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/ai-news-demo"
    },
    status: "completed",
    year: 2024
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Mobile App",
    description: "Full-featured e-commerce app with seamless shopping experience.",
    longDescription: "React Native app with Redux for state management, integrated payment gateway, real-time chat support, and push notifications. Features include product catalog, cart management, order tracking, and user reviews.",
    image: "/assets/images/projects/ecommerce-preview.jpg",
    images: [
      "/assets/images/projects/ecommerce-1.jpg",
      "/assets/images/projects/ecommerce-2.jpg"
    ],
    technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Stripe"],
    category: "mobile",
    featured: true,
    links: {
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/ravikiranbantwal/ecommerce-app"
    },
    status: "completed",
    year: 2023
  },

  {
    id: "design-system",
    title: "Component Design System",
    description: "Comprehensive design system with reusable components.",
    longDescription: "A complete design system built with Storybook, featuring reusable components, design tokens, and comprehensive documentation. Includes accessibility guidelines and best practices.",
    image: "/assets/images/projects/design-system-preview.jpg",
    images: [
      "/assets/images/projects/design-system-1.jpg"
    ],
    technologies: ["React", "Storybook", "Figma", "CSS Variables", "TypeScript"],
    category: "design",
    featured: false,
    links: {
      demo: "https://design-system-demo.com",
      figma: "https://figma.com/design-system"
    },
    status: "in-progress",
    year: 2024
  }
];

export const projectCategories = {
  web: { title: "Web Development", color: "bg-blue-500" },
  mobile: { title: "Mobile Apps", color: "bg-green-500" },
  design: { title: "Design Systems", color: "bg-purple-500" },
  other: { title: "Other Projects", color: "bg-orange-500" }
};