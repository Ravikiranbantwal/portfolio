import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { random } from '@/utils';

interface FloatingCubesProps {
  count: number;
}

interface CubeData {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  color: string;
  rotationSpeed: [number, number, number];
}

export const FloatingCubes: React.FC<FloatingCubesProps> = ({ count }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const cubes = useMemo((): CubeData[] => {
    const colors = [
      '#0ea5e9', '#d946ef', '#06b6d4', '#8b5cf6', '#ec4899', '#10b981'
    ];

    return Array.from({ length: count }, () => ({
      position: [
        random(-15, 15),
        random(-8, 8),
        random(-15, 15)
      ] as [number, number, number],
      rotation: [
        random(0, Math.PI * 2),
        random(0, Math.PI * 2),
        random(0, Math.PI * 2)
      ] as [number, number, number],
      scale: random(0.1, 0.3),
      speed: random(0.5, 2),
      color: colors[Math.floor(random(0, colors.length))],
      rotationSpeed: [
        random(-0.02, 0.02),
        random(-0.02, 0.02),
        random(-0.02, 0.02)
      ] as [number, number, number]
    }));
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire group slowly
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }

    // Animate individual cubes
    meshRefs.current.forEach((mesh, index) => {
      if (mesh && cubes[index]) {
        const cube = cubes[index];
        const time = state.clock.elapsedTime;

        // Floating motion
        mesh.position.y = cube.position[1] + Math.sin(time * cube.speed) * 2;
        
        // Rotation
        mesh.rotation.x += cube.rotationSpeed[0];
        mesh.rotation.y += cube.rotationSpeed[1];
        mesh.rotation.z += cube.rotationSpeed[2];

        // Subtle scale animation
        const scaleVariation = 1 + Math.sin(time * cube.speed * 2) * 0.1;
        mesh.scale.setScalar(cube.scale * scaleVariation);

        // Color pulsing effect
        const material = mesh.material as THREE.MeshStandardMaterial;
        const intensity = 0.5 + Math.sin(time * cube.speed) * 0.3;
        material.emissive = new THREE.Color(cube.color).multiplyScalar(intensity * 0.2);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, index) => (
        <mesh
          key={index}
          ref={(el) => (meshRefs.current[index] = el)}
          position={cube.position}
          rotation={cube.rotation}
          scale={cube.scale}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={cube.color}
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.9}
            emissive={cube.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};