import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Clock, TrendingUp, Zap, Globe, Brain } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  timestamp: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  importance: number;
  readTime: string;
}

interface HolographicCardProps {
  news: NewsItem;
  index: number;
  onSelect: (news: NewsItem) => void;
}

export default function HolographicCard({ news, index, onSelect }: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  
  useEffect(() => {
    const particleArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(particleArray);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return <Zap className="w-5 h-5" />;
      case 'science':
        return <Brain className="w-5 h-5" />;
      case 'global':
        return <Globe className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'from-cyber-400 to-cyber-600';
      case 'negative':
        return 'from-red-400 to-red-600';
      default:
        return 'from-neural-400 to-neural-600';
    }
  };

  const getImportanceGlow = (importance: number) => {
    if (importance > 8) return 'shadow-2xl shadow-matrix-400/50';
    if (importance > 5) return 'shadow-xl shadow-neural-400/40';
    return 'shadow-lg shadow-cyber-400/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5, 
        rotateX: 2,
        transition: { duration: 0.3 }
      }}
      className={`relative group cursor-pointer ${getImportanceGlow(news.importance)}`}
      onClick={() => onSelect(news)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="hologram-effect animate-morph rounded-2xl p-6 relative overflow-hidden h-80 flex flex-col">
        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + particle.delay,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400"
          style={{
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          }}
          animate={{
            background: isHovered 
              ? 'linear-gradient(45deg, #00ffff, #ff0080, #00ffff)' 
              : 'linear-gradient(45deg, #00ffff40, #ff008040, #00ffff40)'
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div 
              className={`p-2 rounded-lg bg-gradient-to-r ${getSentimentColor(news.sentiment)} text-white`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {getCategoryIcon(news.category)}
            </motion.div>
            <div>
              <span className="text-xs font-cyber text-cyan-300 uppercase tracking-wider">
                {news.category}
              </span>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Clock className="w-3 h-3" />
                <span>{news.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Importance meter */}
          <div className="flex flex-col items-end">
            <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${getSentimentColor(news.sentiment)}`}
                initial={{ width: 0 }}
                animate={{ width: `${news.importance * 10}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <span className="text-xs text-gray-400 mt-1">
              Impact: {news.importance}/10
            </span>
          </div>
        </div>

        {/* Title with glitch effect */}
        <motion.h3 
          className="text-lg font-semibold mb-3 text-white glitch-text font-neural"
          data-text={news.title}
          whileHover={{ 
            textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff" 
          }}
        >
          {news.title}
        </motion.h3>

        {/* Summary */}
        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
          {news.summary}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-500">
            {news.timestamp}
          </span>
          
          {/* Neural activity indicator */}
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}