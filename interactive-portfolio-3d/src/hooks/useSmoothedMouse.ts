import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface UseSmoothedMouseOptions {
  sensitivity?: number;
  smoothing?: number;
  throttleMs?: number;
}

export function useSmoothedMouse({
  sensitivity = 0.2,
  smoothing = 0.08,
  throttleMs = 16,
}: UseSmoothedMouseOptions = {}) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      
      // Throttle updates
      if (now - lastUpdateRef.current < throttleMs) {
        return;
      }
      lastUpdateRef.current = now;

      // Calculate normalized mouse position with reduced sensitivity
      const x = ((event.clientX / window.innerWidth) * 2 - 1) * sensitivity;
      const y = (-(event.clientY / window.innerHeight) * 2 + 1) * sensitivity;

      setMousePosition({ x, y });
    };

    // Smooth interpolation loop
    const smoothUpdate = () => {
      setSmoothPosition(prev => {
        const deltaX = mousePosition.x - prev.x;
        const deltaY = mousePosition.y - prev.y;

        // Skip update if change is too small
        if (Math.abs(deltaX) < 0.001 && Math.abs(deltaY) < 0.001) {
          animationFrameRef.current = requestAnimationFrame(smoothUpdate);
          return prev;
        }

        return {
          x: prev.x + deltaX * smoothing,
          y: prev.y + deltaY * smoothing,
        };
      });

      animationFrameRef.current = requestAnimationFrame(smoothUpdate);
    };

    // Add event listener with passive option for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Start smooth update loop
    animationFrameRef.current = requestAnimationFrame(smoothUpdate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition.x, mousePosition.y, sensitivity, smoothing, throttleMs]);

  return smoothPosition;
}