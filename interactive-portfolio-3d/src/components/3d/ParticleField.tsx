import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from '@/utils';

interface ParticleFieldProps {
  count: number;
  radius?: number;
  colors?: string[];
}

export const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 1000,
  radius = 10,
  colors = ['#0ea5e9', '#d946ef', '#06b6d4', '#8b5cf6']
}) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colorArray] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    const colorObjects = colors.map(color => new THREE.Color(color));

    for (let i = 0; i < count; i++) {
      // Generate positions in a sphere
      const r = random(2, radius);
      const theta = random(0, Math.PI * 2);
      const phi = random(0, Math.PI);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Assign random colors
      const color = colorObjects[Math.floor(random(0, colorObjects.length))];
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;

      // Random scales
      scales[i] = random(0.5, 2);
    }

    return [positions, colorArray];
  }, [count, radius, colors]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      
      // Animate particle positions
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const time = state.clock.elapsedTime;
        
        // Add subtle wave motion
        positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.001;
        positions[i3] += Math.cos(time + positions[i3 + 2]) * 0.001;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colorArray}>
      <PointMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};