import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CyberNavbar from './components/ui/CyberNavbar';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Create matrix rain effect
    const createMatrixRain = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.className = 'matrix-rain';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '-1';
      canvas.style.opacity = '0.1';

      document.body.appendChild(canvas);

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const columns = Math.floor(canvas.width / 20);
      const drops: number[] = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

      const draw = () => {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff88';
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * 20, drops[i] * 20);

          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      };

      const interval = setInterval(draw, 50);

      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resizeCanvas);
        document.body.removeChild(canvas);
      };
    };

    const cleanup = createMatrixRain();
    return cleanup;
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-cyber-black text-white overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Navigation */}
      <CyberNavbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 retro-grid opacity-5" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              className="text-6xl mb-8"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              📡
            </motion.div>
            
            <h2 className="text-responsive-4xl font-cyber font-black text-neon-purple mb-8 glitch" data-text="LET'S CONNECT">
              LET'S CONNECT
            </h2>
            
            <p className="text-responsive-lg text-gray-300 mb-12 font-space max-w-2xl mx-auto">
              Ready to build something that'll break the internet? Or just want to chat about 
              the latest tech trends? Hit me up! I'm always down for epic collaborations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  emoji: '📧', 
                  label: 'Email', 
                  value: 'hello@genzdeveloper.com',
                  href: 'mailto:hello@genzdeveloper.com',
                  color: 'text-neon-blue'
                },
                { 
                  emoji: '🐦', 
                  label: 'Twitter', 
                  value: '@GenZDeveloper',
                  href: 'https://twitter.com/genzdeveloper',
                  color: 'text-neon-cyan'
                },
                { 
                  emoji: '💼', 
                  label: 'LinkedIn', 
                  value: '/in/genzdeveloper',
                  href: 'https://linkedin.com/in/genzdeveloper',
                  color: 'text-neon-green'
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="hologram-card p-6 hover:shadow-neon-strong transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{contact.emoji}</div>
                  <h3 className={`font-cyber font-bold mb-2 ${contact.color}`}>
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm font-space">
                    {contact.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-gray-500 text-sm font-space mb-4">
                Built with ❤️ and way too much caffeine ☕
              </p>
              <div className="flex justify-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="text-neon-pink"
                >
                  ⚡
                </motion.div>
                <span className="text-gray-400 font-cyber text-xs">
                  © 2024 Gen Z Developer Demo
                </span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="text-neon-cyan"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Floating Action Elements */}
      <motion.div
        className="fixed bottom-4 left-4 z-30 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col space-y-3">
          {['🔥', '💫', '⚡', '🚀'].map((emoji, index) => (
            <motion.div
              key={index}
              className="w-12 h-12 glass-neon rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, delay: index * 0.2 },
                rotate: { duration: 3, repeat: Infinity, delay: index * 0.3 }
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;