export interface Project {
  id: string;
  title: string;
  description: string;
  emoji: string;
  category: 'web' | 'mobile' | 'ai' | 'game';
  tech: string[];
  color: string;
  gradient: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  vibeLevel: 'fire' | 'cool' | 'wild' | 'epic';
  year: number;
}

export const projects: Project[] = [
  {
    id: 'neural-dreams',
    title: 'Neural Dreams AI',
    description: 'Mind-bending AI art generator that creates trippy visuals from your thoughts. Built with neural networks and pure vibes ✨',
    emoji: '🧠',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'React', 'WebGL'],
    color: '#ff0080',
    gradient: 'from-neon-pink to-neon-purple',
    demoUrl: 'https://neural-dreams.demo',
    githubUrl: 'https://github.com/demo/neural-dreams',
    featured: true,
    vibeLevel: 'epic',
    year: 2024,
  },
  {
    id: 'cyber-portfolio',
    title: 'Cyber Portfolio',
    description: 'The most lit portfolio site ever created. Features 3D elements, neon aesthetics, and enough animations to make your GPU cry 🔥',
    emoji: '🤖',
    category: 'web',
    tech: ['React', 'Three.js', 'GSAP', 'TypeScript'],
    color: '#0066ff',
    gradient: 'from-neon-blue to-neon-cyan',
    demoUrl: 'https://cyber-portfolio.demo',
    githubUrl: 'https://github.com/demo/cyber-portfolio',
    featured: true,
    vibeLevel: 'fire',
    year: 2024,
  },
  {
    id: 'neon-beats',
    title: 'Neon Beats',
    description: 'Music visualizer that turns your playlist into a psychedelic light show. Syncs with Spotify and goes absolutely wild 🎵',
    emoji: '🎧',
    category: 'web',
    tech: ['JavaScript', 'Web Audio API', 'Canvas', 'Spotify API'],
    color: '#00ff88',
    gradient: 'from-neon-green to-vibe-aurora',
    demoUrl: 'https://neon-beats.demo',
    githubUrl: 'https://github.com/demo/neon-beats',
    featured: false,
    vibeLevel: 'wild',
    year: 2023,
  },
  {
    id: 'hologram-chat',
    title: 'Hologram Chat',
    description: 'Real-time chat app that makes you feel like you\'re in a sci-fi movie. Messages appear as floating holograms 🚀',
    emoji: '💬',
    category: 'mobile',
    tech: ['React Native', 'Firebase', 'AR Kit', 'WebRTC'],
    color: '#8b5cf6',
    gradient: 'from-neon-purple to-retro-purple',
    demoUrl: 'https://hologram-chat.demo',
    githubUrl: 'https://github.com/demo/hologram-chat',
    featured: false,
    vibeLevel: 'cool',
    year: 2023,
  },
  {
    id: 'pixel-dungeon',
    title: 'Pixel Dungeon VR',
    description: 'Retro-style dungeon crawler but in VR. Fight pixelated monsters in a neon-lit virtual world. Pure nostalgia meets future tech 🎮',
    emoji: '🕹️',
    category: 'game',
    tech: ['Unity', 'C#', 'VR SDK', 'Blender'],
    color: '#ffff00',
    gradient: 'from-neon-yellow to-vibe-sunset',
    demoUrl: 'https://pixel-dungeon.demo',
    githubUrl: 'https://github.com/demo/pixel-dungeon',
    featured: true,
    vibeLevel: 'epic',
    year: 2023,
  },
  {
    id: 'quantum-dashboard',
    title: 'Quantum Dashboard',
    description: 'Analytics dashboard from the future. Data visualization so smooth it bends spacetime. Features real-time quantum metrics 📊',
    emoji: '⚡',
    category: 'web',
    tech: ['Next.js', 'D3.js', 'PostgreSQL', 'Docker'],
    color: '#ff6600',
    gradient: 'from-vibe-sunset to-retro-orange',
    demoUrl: 'https://quantum-dashboard.demo',
    githubUrl: 'https://github.com/demo/quantum-dashboard',
    featured: false,
    vibeLevel: 'fire',
    year: 2024,
  },
];

export const categories = {
  web: { label: 'Web Apps', icon: '🌐', color: '#0066ff' },
  mobile: { label: 'Mobile', icon: '📱', color: '#00ff88' },
  ai: { label: 'AI/ML', icon: '🤖', color: '#ff0080' },
  game: { label: 'Games', icon: '🎮', color: '#8b5cf6' },
};

export const vibeEmojis = {
  fire: '🔥',
  cool: '😎',
  wild: '🤯',
  epic: '✨',
};