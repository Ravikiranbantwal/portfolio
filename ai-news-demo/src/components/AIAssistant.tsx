import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Mic, MicOff } from 'lucide-react';

interface AIAssistantProps {
  selectedNews: any;
  isReading: boolean;
  onToggleReading: () => void;
  onToggleListening: () => void;
  isListening: boolean;
}

export default function AIAssistant({ 
  selectedNews, 
  isReading, 
  onToggleReading, 
  onToggleListening,
  isListening 
}: AIAssistantProps) {
  const [eyeAnimation, setEyeAnimation] = useState('normal');
  const [mouthAnimation, setMouthAnimation] = useState(0);
  const [brainActivity, setBrainActivity] = useState<number[]>([]);

  useEffect(() => {
    if (isReading) {
      setEyeAnimation('speaking');
      const interval = setInterval(() => {
        setMouthAnimation(prev => (prev + 1) % 4);
      }, 200);
      return () => clearInterval(interval);
    } else if (isListening) {
      setEyeAnimation('listening');
    } else {
      setEyeAnimation('normal');
      setMouthAnimation(0);
    }
  }, [isReading, isListening]);

  useEffect(() => {
    const generateBrainActivity = () => {
      const activity = Array.from({ length: 20 }, () => Math.random());
      setBrainActivity(activity);
    };

    generateBrainActivity();
    const interval = setInterval(generateBrainActivity, 1000);
    return () => clearInterval(interval);
  }, []);

  const getMouthPath = (frame: number) => {
    switch (frame) {
      case 0: return "M30,35 Q40,38 50,35";
      case 1: return "M30,35 Q40,42 50,35";
      case 2: return "M28,35 Q40,45 52,35";
      case 3: return "M30,35 Q40,40 50,35";
      default: return "M30,35 Q40,38 50,35";
    }
  };

  const getEyeColor = () => {
    if (isReading) return "#00ffff";
    if (isListening) return "#ff0080";
    return "#00ff88";
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Main assistant container */}
      <div className="relative">
        {/* Neural activity background */}
        <div className="absolute inset-0 rounded-full">
          {brainActivity.map((activity, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + (index % 8) * 10}%`,
                top: `${20 + Math.floor(index / 8) * 15}%`,
              }}
              animate={{
                opacity: [0.2, activity, 0.2],
                scale: [0.8, 1 + activity * 0.5, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          ))}
        </div>

        {/* Assistant face */}
        <motion.div
          className="w-20 h-20 rounded-full hologram-effect flex items-center justify-center relative overflow-hidden"
          animate={{
            boxShadow: isReading 
              ? "0 0 30px #00ffff, 0 0 60px #00ffff" 
              : isListening
              ? "0 0 30px #ff0080, 0 0 60px #ff0080"
              : "0 0 20px #00ff88",
          }}
        >
          {/* Face SVG */}
          <svg width="60" height="60" viewBox="0 0 80 80">
            {/* Eyes */}
            <motion.circle
              cx="25"
              cy="25"
              r="4"
              fill={getEyeColor()}
              animate={{
                opacity: eyeAnimation === 'speaking' ? [1, 0.3, 1] : 1,
                scaleY: eyeAnimation === 'listening' ? [1, 0.3, 1] : 1,
              }}
              transition={{
                duration: eyeAnimation === 'speaking' ? 0.5 : 2,
                repeat: Infinity,
              }}
            />
            <motion.circle
              cx="55"
              cy="25"
              r="4"
              fill={getEyeColor()}
              animate={{
                opacity: eyeAnimation === 'speaking' ? [1, 0.3, 1] : 1,
                scaleY: eyeAnimation === 'listening' ? [1, 0.3, 1] : 1,
              }}
              transition={{
                duration: eyeAnimation === 'speaking' ? 0.5 : 2,
                repeat: Infinity,
                delay: 0.1,
              }}
            />
            
            {/* Mouth */}
            <motion.path
              d={getMouthPath(mouthAnimation)}
              stroke={getEyeColor()}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Neural connections */}
            <motion.path
              d="M10,10 Q40,30 70,10"
              stroke="#00ffff"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </svg>
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Control buttons */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleReading}
            className="p-2 rounded-full hologram-effect text-white"
            disabled={!selectedNews}
          >
            {isReading ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleListening}
            className={`p-2 rounded-full hologram-effect text-white ${
              isListening ? 'bg-gradient-to-r from-pink-500 to-red-500' : ''
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Status indicator */}
        <AnimatePresence>
          {(isReading || isListening) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <div className="px-3 py-1 rounded-full hologram-effect text-xs font-cyber text-white whitespace-nowrap">
                {isReading ? "Reading news..." : isListening ? "Listening..." : ""}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Voice command hints */}
        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -left-48 top-1/2 transform -translate-y-1/2"
            >
              <div className="p-3 rounded-lg hologram-effect text-xs text-white max-w-40">
                <div className="font-semibold mb-1">Voice Commands:</div>
                <div>"Read this news"</div>
                <div>"Show technology"</div>
                <div>"Latest news"</div>
                <div>"Stop reading"</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}