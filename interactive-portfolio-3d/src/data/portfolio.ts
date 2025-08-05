import { PersonalInfo, Project, Experience, Skill, Technology } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Alex Thompson',
  title: 'Creative Developer & 3D Artist',
  subtitle: 'Crafting immersive digital experiences',
  bio: 'I create stunning interactive experiences that blend creativity with cutting-edge technology.',
  longBio: `I'm a passionate creative developer specializing in interactive 3D experiences, 
    modern web applications, and immersive digital art. With over 5 years of experience 
    in the industry, I've worked with startups and Fortune 500 companies to bring their 
    digital visions to life.`,
  avatar: '/images/avatar.jpg',
  resumeUrl: '/resume.pdf',
  yearsOfExperience: 5,
  projectsCompleted: 47,
  clientsSatisfied: 32,
  contact: {
    email: 'alex@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    timezone: 'PST',
    availability: 'available',
    social: [
      {
        platform: 'GitHub',
        url: 'https://github.com/alexthompson',
        username: 'alexthompson',
        icon: 'github',
        color: '#333'
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/alexthompson',
        username: 'alexthompson',
        icon: 'linkedin',
        color: '#0077B5'
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/alexthompson',
        username: '@alexthompson',
        icon: 'twitter',
        color: '#1DA1F2'
      },
      {
        platform: 'Dribbble',
        url: 'https://dribbble.com/alexthompson',
        username: 'alexthompson',
        icon: 'dribbble',
        color: '#EA4C89'
      }
    ]
  }
};

export const technologies: Technology[] = [
  { name: 'React', icon: 'react', color: '#61DAFB', proficiency: 95 },
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6', proficiency: 90 },
  { name: 'Three.js', icon: 'threejs', color: '#000000', proficiency: 85 },
  { name: 'Next.js', icon: 'nextjs', color: '#000000', proficiency: 88 },
  { name: 'Node.js', icon: 'nodejs', color: '#339933', proficiency: 82 },
  { name: 'Python', icon: 'python', color: '#3776AB', proficiency: 78 },
  { name: 'WebGL', icon: 'webgl', color: '#990000', proficiency: 80 },
  { name: 'Blender', icon: 'blender', color: '#F5792A', proficiency: 75 },
  { name: 'Figma', icon: 'figma', color: '#F24E1E', proficiency: 85 },
  { name: 'Framer Motion', icon: 'framer', color: '#0055FF', proficiency: 90 }
];

export const projects: Project[] = [
  {
    id: 'neural-garden',
    title: 'Neural Garden',
    description: 'An interactive 3D visualization exploring AI consciousness through generative art.',
    longDescription: `Neural Garden is an immersive web experience that visualizes artificial intelligence 
      through organic, growing 3D forms. Users can interact with neural networks represented as living 
      garden ecosystems, watching thoughts bloom into beautiful geometric flowers.`,
    image: '/images/projects/neural-garden.jpg',
    tags: ['AI', 'Visualization', '3D', 'Interactive'],
    technologies: [
      technologies.find(t => t.name === 'Three.js')!,
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'TypeScript')!,
      technologies.find(t => t.name === 'WebGL')!
    ],
    liveUrl: 'https://neural-garden.demo.com',
    githubUrl: 'https://github.com/alexthompson/neural-garden',
    featured: true,
    category: '3d-visualization',
    year: 2024,
    client: 'Tech Innovators Inc.',
    duration: '3 months',
    role: 'Lead Developer & 3D Artist',
    challenges: [
      'Real-time performance with thousands of particles',
      'Smooth transitions between different AI states',
      'Cross-browser WebGL compatibility'
    ],
    solutions: [
      'Implemented instanced rendering for particle systems',
      'Created custom shader transitions',
      'Added progressive enhancement fallbacks'
    ],
    results: [
      '50k+ unique visitors in first month',
      'Featured in Web Design Awards',
      '95% positive user feedback'
    ]
  },
  {
    id: 'cosmic-portfolio',
    title: 'Cosmic Portfolio',
    description: 'A space-themed portfolio website with realistic planetary physics.',
    longDescription: `An otherworldly portfolio experience featuring a fully interactive solar system. 
      Each planet represents a different project, with realistic orbital mechanics and stunning 
      particle effects creating shooting stars and cosmic dust.`,
    image: '/images/projects/cosmic-portfolio.jpg',
    tags: ['Portfolio', 'Physics', 'Space', '3D'],
    technologies: [
      technologies.find(t => t.name === 'Three.js')!,
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Framer Motion')!
    ],
    liveUrl: 'https://cosmic-portfolio.demo.com',
    githubUrl: 'https://github.com/alexthompson/cosmic-portfolio',
    featured: true,
    category: 'web-development',
    year: 2023,
    duration: '2 months',
    role: 'Full Stack Developer',
    challenges: [
      'Accurate orbital mechanics simulation',
      'Performance optimization for mobile devices',
      'Intuitive navigation in 3D space'
    ],
    solutions: [
      'Custom physics engine with Verlet integration',
      'Level-of-detail system for distant objects',
      'Gesture-based camera controls'
    ],
    results: [
      'Winner of CSS Design Awards',
      '100k+ social media impressions',
      'Hired by 3 clients from this showcase'
    ]
  },
  {
    id: 'liquid-morphing',
    title: 'Liquid Morphing UI',
    description: 'Experimental UI components that flow like liquid between states.',
    longDescription: `A collection of revolutionary UI components that break traditional design boundaries. 
      Elements morph and flow like liquid mercury, creating mesmerizing transitions that feel both 
      futuristic and organic.`,
    image: '/images/projects/liquid-ui.jpg',
    tags: ['UI/UX', 'Animation', 'Experimental', 'Component Library'],
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Framer Motion')!,
      technologies.find(t => t.name === 'TypeScript')!
    ],
    liveUrl: 'https://liquid-ui.demo.com',
    githubUrl: 'https://github.com/alexthompson/liquid-ui',
    featured: true,
    category: 'ui-ux-design',
    year: 2023,
    duration: '4 months',
    role: 'UI Developer & Animator',
    challenges: [
      'Smooth morphing between complex shapes',
      'Maintaining accessibility during animations',
      'Cross-browser animation consistency'
    ],
    solutions: [
      'SVG path interpolation algorithms',
      'Reduced motion preferences support',
      'Progressive enhancement approach'
    ],
    results: [
      'Open source library with 2k+ stars',
      'Featured in Design Systems Weekly',
      'Adopted by 15+ companies'
    ]
  },
  {
    id: 'ar-furniture',
    title: 'AR Furniture Visualizer',
    description: 'Mobile AR app for visualizing furniture in real spaces.',
    longDescription: `Revolutionary augmented reality application that allows users to place and customize 
      furniture in their real environment. Features realistic lighting, shadows, and material 
      visualization powered by advanced AR technology.`,
    image: '/images/projects/ar-furniture.jpg',
    tags: ['AR', 'Mobile', '3D', 'E-commerce'],
    technologies: [
      technologies.find(t => t.name === 'Three.js')!,
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'WebGL')!
    ],
    liveUrl: 'https://ar-furniture.demo.com',
    featured: false,
    category: 'mobile-development',
    year: 2023,
    client: 'FurniCorp',
    duration: '6 months',
    role: 'AR Developer',
    results: [
      '40% increase in conversion rate',
      '60% reduction in returns',
      'Apple App Store featured app'
    ]
  },
  {
    id: 'data-crystals',
    title: 'Data Crystal Visualization',
    description: 'Transform complex datasets into beautiful 3D crystal formations.',
    longDescription: `An innovative approach to data visualization that represents complex datasets as 
      growing crystal structures. Each data point becomes a facet of the crystal, creating beautiful 
      and intuitive representations of multidimensional information.`,
    image: '/images/projects/data-crystals.jpg',
    tags: ['Data Viz', '3D', 'Analytics', 'Interactive'],
    technologies: [
      technologies.find(t => t.name === 'Three.js')!,
      technologies.find(t => t.name === 'Python')!,
      technologies.find(t => t.name === 'TypeScript')!
    ],
    liveUrl: 'https://data-crystals.demo.com',
    githubUrl: 'https://github.com/alexthompson/data-crystals',
    featured: false,
    category: 'data-visualization',
    year: 2022,
    duration: '3 months',
    role: 'Data Visualization Developer'
  },
  {
    id: 'quantum-music',
    title: 'Quantum Music Visualizer',
    description: 'Audio-reactive 3D visualizations inspired by quantum mechanics.',
    longDescription: `Experience music like never before with visualizations that respond to audio in 
      real-time, creating quantum-inspired particle effects and wave functions that dance to the beat.`,
    image: '/images/projects/quantum-music.jpg',
    tags: ['Audio', 'Visualization', 'Quantum', 'Real-time'],
    technologies: [
      technologies.find(t => t.name === 'Three.js')!,
      technologies.find(t => t.name === 'WebGL')!,
      technologies.find(t => t.name === 'React')!
    ],
    liveUrl: 'https://quantum-music.demo.com',
    featured: false,
    category: '3d-visualization',
    year: 2022,
    duration: '2 months',
    role: 'Creative Developer'
  }
];

export const experiences: Experience[] = [
  {
    id: 'senior-creative-dev',
    company: 'Immersive Studios',
    position: 'Senior Creative Developer',
    location: 'San Francisco, CA',
    startDate: '2022-03-01',
    current: true,
    description: 'Leading the development of cutting-edge interactive experiences for Fortune 500 clients.',
    achievements: [
      'Delivered 12+ award-winning interactive installations',
      'Increased client satisfaction scores by 35%',
      'Built and mentored a team of 8 developers',
      'Established new technical standards and workflows'
    ],
    technologies: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Node.js', 'Python'],
    companyUrl: 'https://immersive-studios.com'
  },
  {
    id: 'fullstack-dev',
    company: 'TechFlow Solutions',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: '2020-06-01',
    endDate: '2022-02-28',
    current: false,
    description: 'Developed scalable web applications and interactive prototypes for startup clients.',
    achievements: [
      'Built 20+ production applications',
      'Reduced load times by 60% through optimization',
      'Implemented CI/CD pipelines for 5 teams',
      'Contributed to open source projects with 10k+ stars'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    companyUrl: 'https://techflow.solutions'
  },
  {
    id: 'frontend-dev',
    company: 'Digital Craft Agency',
    position: 'Frontend Developer',
    location: 'Los Angeles, CA',
    startDate: '2019-01-01',
    endDate: '2020-05-31',
    current: false,
    description: 'Created engaging user interfaces and interactive experiences for creative campaigns.',
    achievements: [
      'Launched 30+ client websites',
      'Improved accessibility compliance to 100%',
      'Reduced development time by 40% with component library',
      'Won 3 industry design awards'
    ],
    technologies: ['JavaScript', 'React', 'GSAP', 'CSS3', 'Webpack'],
    companyUrl: 'https://digitalcraft.agency'
  }
];

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 95,
    icon: 'react',
    color: '#61DAFB',
    description: 'Advanced React development with hooks, context, and performance optimization',
    yearsOfExperience: 5
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: '3d-graphics',
    proficiency: 85,
    icon: 'threejs',
    color: '#000000',
    description: '3D graphics programming with WebGL, shaders, and advanced rendering techniques',
    yearsOfExperience: 3
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 90,
    icon: 'typescript',
    color: '#3178C6',
    description: 'Type-safe development with advanced TypeScript patterns and tooling',
    yearsOfExperience: 4
  },
  {
    id: 'webgl',
    name: 'WebGL',
    category: '3d-graphics',
    proficiency: 80,
    icon: 'webgl',
    color: '#990000',
    description: 'Low-level graphics programming and custom shader development',
    yearsOfExperience: 3
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 82,
    icon: 'nodejs',
    color: '#339933',
    description: 'Server-side JavaScript development with Express, APIs, and microservices',
    yearsOfExperience: 4
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    proficiency: 78,
    icon: 'python',
    color: '#3776AB',
    description: 'Data analysis, machine learning, and backend development with Python',
    yearsOfExperience: 3
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    proficiency: 85,
    icon: 'figma',
    color: '#F24E1E',
    description: 'UI/UX design, prototyping, and design system creation',
    yearsOfExperience: 4
  },
  {
    id: 'blender',
    name: 'Blender',
    category: '3d-graphics',
    proficiency: 75,
    icon: 'blender',
    color: '#F5792A',
    description: '3D modeling, animation, and rendering for web and interactive media',
    yearsOfExperience: 2
  }
];