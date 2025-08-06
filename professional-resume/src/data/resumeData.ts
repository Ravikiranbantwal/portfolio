export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  year: number;
  featured: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  grade?: string;
  achievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export const resumeData = {
  personal: {
    name: "RaviKiran Bantwal",
    title: "Full Stack Developer",
    subtitle: "Creating amazing digital experiences with modern technologies",
    bio: "Passionate full-stack developer with 17+ years of experience spanning telecommunications and modern web development. Specialized in React, TypeScript, Python, and cutting-edge web technologies. Proven track record of delivering high-quality applications and leading technical initiatives.",
    contact: {
      email: "bantwalravikiran@gmail.com",
      phone: "+91 98118 54273",
      location: "Bangalore, India"
    },
    social: {
      github: "https://github.com/Ravikiranbantwal",
      linkedin: "https://linkedin.com/in/ravikiranbantwal",
      twitter: "https://twitter.com/ravikiranbantwal"
    }
  } as PersonalInfo,

  skills: [
    // Frontend
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Framer Motion", level: 80, category: "Frontend" },
    { name: "Three.js", level: 70, category: "Frontend" },
    
    // Backend
    { name: "Python", level: 90, category: "Backend" },
    { name: "FastAPI", level: 85, category: "Backend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 75, category: "Backend" },
    { name: "PostgreSQL", level: 70, category: "Backend" },
    { name: "REST APIs", level: 90, category: "Backend" },
    
    // Tools & Technologies
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 70, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" },
    { name: "Vite", level: 85, category: "Tools" },
    
    // Design
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "Responsive Design", level: 95, category: "Design" },
    { name: "Animation", level: 80, category: "Design" },
  ] as Skill[],

  experience: [
    {
      company: "Freelance",
      position: "Full Stack Developer & Mobile App Developer",
      duration: "2020 - Present",
      location: "Bangalore, India",
      type: "Freelance",
      description: "Specialized in developing modern web applications and mobile apps using cutting-edge technologies. Delivered high-quality solutions for diverse client requirements.",
      achievements: [
        "Developed 20+ full-stack web applications using React, Node.js, and Python",
        "Built 15+ mobile applications for iOS and Android platforms",
        "Implemented RESTful APIs and microservices architecture",
        "Achieved 95% client satisfaction rate with on-time delivery",
        "Led technical architecture decisions for enterprise-level applications"
      ],
      technologies: ["React", "TypeScript", "Python", "FastAPI", "Node.js", "MongoDB", "PostgreSQL"],
      current: true
    },
    {
      company: "BSNL",
      position: "Junior Telecom Officer",
      duration: "2010 - 2022",
      location: "Bangalore, India",
      type: "Full-time",
      description: "Managed telecommunications infrastructure and network operations. Provided technical support and maintained network connectivity for customers.",
      achievements: [
        "Managed network infrastructure serving 50K+ customers",
        "Implemented network security protocols and monitoring systems",
        "Reduced network downtime by 40% through proactive maintenance",
        "Trained 10+ junior technicians on network operations",
        "Led digital transformation initiatives within the organization"
      ],
      technologies: ["Network Administration", "Telecom Systems", "Cisco", "Network Security"],
      current: false
    },
    {
      company: "Global Network Solutions",
      position: "Network Administrator",
      duration: "2005 - 2010",
      location: "Mangalore, India",
      type: "Full-time",
      description: "Administered network infrastructure and provided technical support for corporate clients. Managed server configurations and network security.",
      achievements: [
        "Managed network infrastructure for 100+ corporate clients",
        "Implemented network security solutions and firewall configurations",
        "Reduced system downtime by 60% through proactive monitoring",
        "Led network infrastructure upgrades and migrations"
      ],
      technologies: ["Network Administration", "Windows Server", "Linux", "Cisco"],
      current: false
    }
  ] as Experience[],

  projects: [
    {
      title: "Neural News AI",
      description: "Revolutionary AI-powered news platform with neural network visualization, holographic cards, and voice interaction.",
      technologies: ["React", "TypeScript", "Three.js", "Framer Motion", "Web Speech API"],
      links: {
        demo: "https://ai-news-demo-rkbantwal.netlify.app",
        github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/ai-news-demo"
      },
      year: 2024,
      featured: true
    },
    {
      title: "Interactive Portfolio 3D",
      description: "Stunning 3D portfolio with advanced animations, Three.js effects, and immersive user experience.",
      technologies: ["React", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS"],
      links: {
        demo: "https://interactive-portfolio-3d-rkbantwal.netlify.app",
        github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/interactive-portfolio-3d"
      },
      year: 2024,
      featured: true
    },
    {
      title: "Gen Z Portfolio Demo",
      description: "Next-generation portfolio with cyberpunk aesthetics, neon effects, and interactive 3D elements.",
      technologies: ["React", "Three.js", "GSAP", "Canvas Confetti", "Tailwind CSS"],
      links: {
        demo: "https://genz-portfolio-demo-rkbantwal.netlify.app",
        github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/genz-portfolio-demo"
      },
      year: 2024,
      featured: true
    },
    {
      title: "Analytics Dashboard",
      description: "Beautiful and responsive analytics dashboard with real-time data visualization and interactive charts.",
      technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS", "Framer Motion"],
      links: {
        demo: "https://analytics-dashboard-rkbantwal.netlify.app",
        github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/analytics-dashboard"
      },
      year: 2024,
      featured: true
    },
    {
      title: "South Indian Restaurant",
      description: "Modern restaurant website with online ordering, menu management, and table reservations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "React Router", "React Hot Toast"],
      links: {
        demo: "https://south-indian-restaurant-rkbantwal.netlify.app",
        github: "https://github.com/Ravikiranbantwal/portfolio/tree/main/south-indian-restaurant"
      },
      year: 2024,
      featured: true
    },
    {
      title: "E-Commerce Mobile App",
      description: "Full-featured mobile app with seamless shopping experience, payment integration, and real-time chat.",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Stripe"],
      links: {
        demo: "https://ecommerce-demo.com"
      },
      year: 2023,
      featured: true
    }
  ] as Project[],



  certifications: [
    {
      name: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      issuer: "Udemy",
      date: "2024",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
      name: "TypeScript - The Complete Developer's Guide",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/course/typescript-the-complete-developers-guide/"
    },
    {
      name: "Python for Data Science and Machine Learning Bootcamp",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
    },
    {
      name: "Three.js Journey - Master 3D Web Development",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/course/threejs-journey/"
    },
    {
      name: "Node.js - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      issuer: "Udemy",
      date: "2022",
      link: "https://www.udemy.com/course/nodejs-the-complete-guide/"
    },
    {
      name: "FastAPI - The Complete Course",
      issuer: "Udemy",
      date: "2022",
      link: "https://www.udemy.com/course/fastapi-the-complete-course/"
    },
    {
      name: "Tailwind CSS From Scratch",
      issuer: "Udemy",
      date: "2021",
      link: "https://www.udemy.com/course/tailwindcss-from-scratch/"
    },
    {
      name: "Framer Motion - Master Animation in React",
      issuer: "Udemy",
      date: "2021",
      link: "https://www.udemy.com/course/framer-motion-master-animation-in-react/"
    },
    {
      name: "Git & GitHub - The Complete Git Masterclass",
      issuer: "Udemy",
      date: "2020",
      link: "https://www.udemy.com/course/git-complete/"
    },
    {
      name: "JavaScript - The Complete Guide 2024",
      issuer: "Udemy",
      date: "2019",
      link: "https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/"
    }
  ] as Certification[],

  stats: {
    totalExperience: "17+ Years",
    projectsCompleted: "35+",
    clientsSatisfied: "100+",
    technologiesUsed: "25+"
  }
};