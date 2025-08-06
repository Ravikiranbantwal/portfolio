export interface NewsItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  timestamp: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  importance: number;
  readTime: string;
  content: string;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Revolutionary Quantum AI Breakthrough Achieved in Neural Processing',
    category: 'Technology',
    summary: 'Scientists develop quantum-enhanced neural networks that process information 1000x faster than traditional systems.',
    timestamp: '2 minutes ago',
    sentiment: 'positive',
    importance: 9,
    readTime: '3 min read',
    content: 'A groundbreaking development in quantum artificial intelligence has been achieved by researchers at the Institute for Advanced Neural Computing. The new quantum-enhanced neural processing system demonstrates unprecedented speed and efficiency in data processing tasks.'
  },
  {
    id: '2',
    title: 'Brain-Computer Interface Enables Direct Thought-to-Text Communication',
    category: 'Science',
    summary: 'New BCI technology allows paralyzed patients to type at 90 words per minute using only their thoughts.',
    timestamp: '15 minutes ago',
    sentiment: 'positive',
    importance: 8,
    readTime: '4 min read',
    content: 'Medical researchers have successfully demonstrated a brain-computer interface that translates neural signals directly into text, offering new hope for patients with severe mobility limitations.'
  },
  {
    id: '3',
    title: 'Autonomous Drone Swarms Deploy for Emergency Climate Response',
    category: 'Global',
    summary: 'AI-controlled drone networks now autonomously respond to natural disasters, providing real-time data and emergency aid.',
    timestamp: '1 hour ago',
    sentiment: 'positive',
    importance: 7,
    readTime: '5 min read',
    content: 'Emergency response systems are being revolutionized by autonomous drone swarms that can rapidly deploy to disaster zones, collect critical data, and coordinate rescue operations without human intervention.'
  },
  {
    id: '4',
    title: 'Deepfake Detection Algorithm Reaches 99.8% Accuracy Rate',
    category: 'Technology',
    summary: 'New AI system can identify manipulated videos with unprecedented precision, combating misinformation.',
    timestamp: '2 hours ago',
    sentiment: 'positive',
    importance: 8,
    readTime: '3 min read',
    content: 'Cybersecurity experts have developed an advanced deepfake detection system that uses multi-layered neural analysis to identify manipulated media with near-perfect accuracy.'
  },
  {
    id: '5',
    title: 'Neural Implants Successfully Restore Vision to Blind Patients',
    category: 'Science',
    summary: 'Experimental brain implants bypass damaged eyes entirely, sending visual data directly to the brain.',
    timestamp: '3 hours ago',
    sentiment: 'positive',
    importance: 9,
    readTime: '6 min read',
    content: 'A clinical trial using neural implants has successfully restored partial vision to patients with severe blindness, marking a major milestone in neurotechnology and medical treatment.'
  },
  {
    id: '6',
    title: 'AI Weather Prediction Models Achieve 95% Accuracy for Extreme Events',
    category: 'Global',
    summary: 'Machine learning systems now predict severe weather patterns weeks in advance with remarkable precision.',
    timestamp: '4 hours ago',
    sentiment: 'positive',
    importance: 7,
    readTime: '4 min read',
    content: 'Meteorological institutes worldwide are adopting new AI-powered weather prediction systems that can forecast extreme weather events with unprecedented accuracy and lead time.'
  },
  {
    id: '7',
    title: 'Virtual Reality Therapy Shows 87% Success Rate in Treating PTSD',
    category: 'Science',
    summary: 'Immersive VR environments combined with AI guidance prove highly effective for trauma recovery.',
    timestamp: '6 hours ago',
    sentiment: 'positive',
    importance: 6,
    readTime: '5 min read',
    content: 'Mental health professionals report remarkable success using AI-guided virtual reality therapy sessions to treat post-traumatic stress disorder in military veterans and trauma survivors.'
  },
  {
    id: '8',
    title: 'Robotic Surgeons Perform First Fully Autonomous Heart Operation',
    category: 'Technology',
    summary: 'AI-controlled surgical robots complete complex cardiac procedure without human intervention.',
    timestamp: '8 hours ago',
    sentiment: 'neutral',
    importance: 8,
    readTime: '4 min read',
    content: 'A milestone in medical robotics was achieved when autonomous surgical systems successfully performed a complete heart bypass operation, monitored but not controlled by human surgeons.'
  },
  {
    id: '9',
    title: 'Smart Cities Deploy Predictive Traffic AI to Eliminate Congestion',
    category: 'Global',
    summary: 'Urban centers report 40% reduction in traffic delays using AI-optimized transportation networks.',
    timestamp: '12 hours ago',
    sentiment: 'positive',
    importance: 5,
    readTime: '3 min read',
    content: 'Major metropolitan areas are implementing intelligent traffic management systems that use machine learning to predict and prevent congestion before it occurs, significantly improving urban mobility.'
  },
  {
    id: '10',
    title: 'Language Models Now Understand and Generate Code in 500+ Programming Languages',
    category: 'Technology',
    summary: 'Latest AI language models demonstrate unprecedented coding capabilities across diverse programming paradigms.',
    timestamp: '1 day ago',
    sentiment: 'positive',
    importance: 6,
    readTime: '7 min read',
    content: 'Software development is being transformed by AI systems that can understand, debug, and generate high-quality code in hundreds of programming languages, from popular frameworks to obscure domain-specific languages.'
  }
];

export const categories = ['All', 'Technology', 'Science', 'Global'];

export const getNewsByCategory = (category: string): NewsItem[] => {
  if (category === 'All') return mockNews;
  return mockNews.filter(news => news.category === category);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return mockNews.find(news => news.id === id);
};