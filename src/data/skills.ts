export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon?: string;
  svgIcon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "⚛️", svgIcon: "/assets/icons/react.svg" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "📘", svgIcon: "/assets/icons/typescript.svg" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "📘", svgIcon: "/assets/icons/javascript.svg" },
  { name: "Next.js", level: 85, category: "frontend", icon: "▲", svgIcon: "/assets/icons/nextjs.svg" },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "🎨", svgIcon: "/assets/icons/tailwindcss.svg" },
  { name: "Framer Motion", level: 80, category: "frontend", icon: "🎬", svgIcon: "/assets/icons/framer.svg" },
  { name: "GSAP", level: 75, category: "frontend", icon: "✨", svgIcon: "/assets/icons/gsap.svg" },
  { name: "Three.js", level: 70, category: "frontend", icon: "🎲", svgIcon: "/assets/icons/threejs.svg" },
  
  // Backend
  { name: "Python", level: 90, category: "backend", icon: "🐍", svgIcon: "/assets/icons/python.svg" },
  { name: "FastAPI", level: 85, category: "backend", icon: "⚡", svgIcon: "/assets/icons/fastapi.svg" },
  { name: "Node.js", level: 85, category: "backend", icon: "🟢", svgIcon: "/assets/icons/nodejs.svg" },
  { name: "Express.js", level: 80, category: "backend", icon: "📦", svgIcon: "/assets/icons/express.svg" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃", svgIcon: "/assets/icons/mongodb.svg" },
  { name: "PostgreSQL", level: 70, category: "backend", icon: "🐘", svgIcon: "/assets/icons/postgresql.svg" },
  { name: "GraphQL", level: 65, category: "backend", icon: "🔷", svgIcon: "/assets/icons/graphql.svg" },
  { name: "REST APIs", level: 90, category: "backend", icon: "🔗", svgIcon: "/assets/icons/rest.svg" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📝", svgIcon: "/assets/icons/git.svg" },
  { name: "Docker", level: 70, category: "tools", icon: "🐳", svgIcon: "/assets/icons/docker.svg" },
  { name: "VS Code", level: 95, category: "tools", icon: "💻", svgIcon: "/assets/icons/vscode.svg" },
  { name: "Figma", level: 80, category: "tools", icon: "🎨", svgIcon: "/assets/icons/figma.svg" },
  { name: "Vite", level: 85, category: "tools", icon: "⚡", svgIcon: "/assets/icons/vite.svg" },
  { name: "Webpack", level: 75, category: "tools", icon: "📦", svgIcon: "/assets/icons/webpack.svg" },
  
  // Design
  { name: "UI/UX Design", level: 85, category: "design", icon: "🎯", svgIcon: "/assets/icons/uiuxdesign.svg" },
  { name: "Responsive Design", level: 95, category: "design", icon: "📱", svgIcon: "/assets/icons/responsive-design.svg" },
  { name: "Animation", level: 80, category: "design", icon: "🎬", svgIcon: "/assets/icons/animation.svg" },
  { name: "Color Theory", level: 75, category: "design", icon: "🎨", svgIcon: "/assets/icons/colortheory.svg" },
];

export const skillCategories = {
  frontend: {
    title: "Frontend Development",
    color: "from-blue-500 to-purple-600",
    icon: "💻"
  },
  backend: {
    title: "Backend Development", 
    color: "from-green-500 to-blue-500",
    icon: "⚙️"
  },
  tools: {
    title: "Tools & Technologies",
    color: "from-orange-500 to-red-500", 
    icon: "🛠️"
  },
  design: {
    title: "Design & UI/UX",
    color: "from-pink-500 to-purple-500",
    icon: "🎨"
  }
};