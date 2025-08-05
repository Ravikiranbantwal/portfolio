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
      demo: "https://yourname-analytics.netlify.app",
      github: "https://github.com/ravikiranbantwal/portfolio/tree/main/analytics-dashboard"
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
    id: "portfolio-website",
    title: "Interactive Portfolio Website",
    description: "Personal portfolio with stunning animations and 3D effects.",
    longDescription: "This very website you're viewing! Built with React, TypeScript, Three.js, and GSAP. Features include scroll-triggered animations, particle effects, 3D models, and responsive design.",
    image: "/assets/images/projects/portfolio-preview.jpg",
    images: [
      "/assets/images/projects/portfolio-1.jpg",
      "/assets/images/projects/portfolio-2.jpg"
    ],
    technologies: ["React", "TypeScript", "Three.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    category: "web",
    featured: true,
    links: {
      demo: "https://ravikiranbantwal.com",
      github: "https://github.com/ravikiranbantwal/portfolio"
    },
    status: "completed",
    year: 2024
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