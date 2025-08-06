import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

interface ParticleSystemProps {
  isActive: boolean;
  intensity: number;
}

export default function ParticleSystem({ isActive, intensity }: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      'rgba(0, 255, 255, ',
      'rgba(255, 0, 128, ',
      'rgba(0, 255, 136, ',
      'rgba(168, 85, 247, ',
      'rgba(234, 179, 8, '
    ];

    const createParticle = (x?: number, y?: number): Particle => {
      return {
        id: Math.random(),
        x: x || Math.random() * canvas.width,
        y: y || Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 255,
        maxLife: 255,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 3 + 1,
      };
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 2;

      // Boundary bouncing
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      return particle.life > 0;
    };

    const drawParticle = (particle: Particle) => {
      const alpha = particle.life / particle.maxLife;
      ctx.fillStyle = particle.color + alpha + ')';
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Glow effect
      ctx.shadowColor = particle.color + '0.8)';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawConnections = () => {
      const maxDistance = 100;
      const particles = particlesRef.current;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const alpha = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isActive) {
        // Add new particles based on intensity
        const particlesToAdd = Math.floor(intensity * 3);
        for (let i = 0; i < particlesToAdd; i++) {
          if (particlesRef.current.length < 100) {
            particlesRef.current.push(createParticle());
          }
        }
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        const alive = updateParticle(particle);
        if (alive) {
          drawParticle(particle);
        }
        return alive;
      });

      // Draw connections between particles
      if (particlesRef.current.length > 1) {
        drawConnections();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize with some particles
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(createParticle());
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, intensity]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen',
      }}
    />
  );
}