export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: "freelance-2020",
    company: "Freelance",
    position: "Full Stack Developer & Mobile App Developer",
    duration: "2020 - Present",
    location: "Bangalore",
    type: "freelance",
    description: "Specialized in developing modern web applications and mobile apps using cutting-edge technologies. Delivered high-quality solutions for diverse client requirements.",
    achievements: [
      "Developed 20+ full-stack web applications using React, Node.js, and Python",
      "Built 15+ mobile applications for iOS and Android platforms",
      "Implemented RESTful APIs and microservices architecture",
      "Achieved 95% client satisfaction rate with on-time delivery"
    ],
    technologies: ["React", "Node.js", "Python", "FastAPI", "React Native", "Flutter", "MongoDB", "PostgreSQL"],
    current: true
  },
  {
    id: "bsnl-2010",
    company: "BSNL",
    position: "Junior Telecom Officer",
    duration: "2010 - 2022",
    location: "Bangalore",
    type: "full-time",
    description: "Managed telecommunications infrastructure and network operations. Provided technical support and maintained network connectivity for customers.",
    achievements: [
      "Managed network infrastructure serving 50K+ customers",
      "Implemented network security protocols and monitoring systems",
      "Reduced network downtime by 40% through proactive maintenance",
      "Trained 10+ junior technicians on network operations"
    ],
    technologies: ["Network Administration", "Telecom Systems", "Cisco", "Fiber Optics", "Network Security"],
    current: false
  },
  {
    id: "global-network-2005",
    company: "Global Network Solutions",
    position: "Network Administrator",
    duration: "2005 - 2010",
    location: "Mangalore",
    type: "full-time",
    description: "Administered network infrastructure and provided technical support for corporate clients. Managed server configurations and network security.",
    achievements: [
      "Managed network infrastructure for 100+ corporate clients",
      "Implemented network security solutions and firewall configurations",
      "Reduced system downtime by 60% through proactive monitoring",
      "Led network infrastructure upgrades and migrations"
    ],
    technologies: ["Network Administration", "Windows Server", "Linux", "Cisco", "Firewall Configuration"],
    current: false
  }
];

export const experienceStats = {
  totalExperience: "17+ Years",
  projectsCompleted: "35+",
  clientsSatisfied: "100+",
  technologiesUsed: "25+"
};