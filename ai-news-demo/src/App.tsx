import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Filter, Search, Mic } from 'lucide-react';
import NeuralNetwork from './components/NeuralNetwork';
import HolographicCard from './components/HolographicCard';
import AIAssistant from './components/AIAssistant';
import ParticleSystem from './components/ParticleSystem';
import { mockNews, categories, getNewsByCategory, NewsItem } from './data/mockNews';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(mockNews);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [particleIntensity, setParticleIntensity] = useState(1);

  useEffect(() => {
    let filtered = getNewsByCategory(selectedCategory);
    
    if (searchQuery) {
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        news.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredNews(filtered);
  }, [selectedCategory, searchQuery]);

  const handleNewsSelect = useCallback((news: NewsItem) => {
    setSelectedNews(news);
    setParticleIntensity(news.importance / 10);
  }, []);

  const handleToggleReading = useCallback(() => {
    if (!selectedNews) return;
    
    setIsReading(!isReading);
    
    if (!isReading && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        `${selectedNews.title}. ${selectedNews.summary}. ${selectedNews.content}`
      );
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.onend = () => setIsReading(false);
      speechSynthesis.speak(utterance);
    } else if (isReading) {
      speechSynthesis.cancel();
    }
  }, [selectedNews, isReading]);

  const handleToggleListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    setIsListening(!isListening);

    if (!isListening) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        
        if (transcript.includes('read this news') && selectedNews) {
          handleToggleReading();
        } else if (transcript.includes('technology')) {
          setSelectedCategory('Technology');
        } else if (transcript.includes('science')) {
          setSelectedCategory('Science');
        } else if (transcript.includes('global')) {
          setSelectedCategory('Global');
        } else if (transcript.includes('all news') || transcript.includes('show all')) {
          setSelectedCategory('All');
        } else if (transcript.includes('stop reading')) {
          setIsReading(false);
          speechSynthesis.cancel();
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  }, [isListening, selectedNews, handleToggleReading]);

  return (
    <div className="min-h-screen bg-black neural-grid relative overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetwork />
      
      {/* Particle System */}
      <ParticleSystem isActive={!!selectedNews} intensity={particleIntensity} />

      {/* Main Content */}
      <div className="relative z-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-black/50 backdrop-blur-lg border-b border-cyan-500/30"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center justify-between mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                >
                  <Brain className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h1 className="text-4xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 glitch-text" data-text="Neural News">
                    Neural News
                  </h1>
                  <p className="text-gray-400 text-sm font-neural">
                    AI-Powered News Intelligence System
                  </p>
                </div>
              </div>
              
              {/* Search */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search neural pathways..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg bg-black/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 hologram-effect"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleToggleListening}
                  className={`p-2 rounded-lg hologram-effect ${isListening ? 'bg-gradient-to-r from-pink-500 to-red-500' : ''}`}
                >
                  <Mic className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-cyan-400" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-neural transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'hologram-effect text-gray-300 hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.header>

        {/* News Grid */}
        <main className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news, index) => (
                <HolographicCard
                  key={news.id}
                  news={news}
                  index={index}
                  onSelect={handleNewsSelect}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Selected News Detail */}
          <AnimatePresence>
            {selectedNews && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="fixed bottom-0 left-0 right-0 p-6 bg-black/90 backdrop-blur-lg border-t border-cyan-500/30 z-30"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="hologram-effect rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Zap className="w-6 h-6 text-cyan-400" />
                        <div>
                          <h3 className="text-xl font-semibold text-white glitch-text" data-text={selectedNews.title}>
                            {selectedNews.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{selectedNews.category} • {selectedNews.readTime}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedNews(null)}
                        className="p-2 rounded-lg hologram-effect text-white"
                      >
                        ✕
                      </motion.button>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedNews.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* AI Assistant */}
      <AIAssistant
        selectedNews={selectedNews}
        isReading={isReading}
        onToggleReading={handleToggleReading}
        onToggleListening={handleToggleListening}
        isListening={isListening}
      />
    </div>
  );
}

export default App;
