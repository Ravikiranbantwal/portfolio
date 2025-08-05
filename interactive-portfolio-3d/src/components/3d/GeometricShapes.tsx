import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { random } from '@/utils';

interface GeometricShapeProps {
  position: [number, number, number];
  scale: number;
  color: string;
  type: 'sphere' | 'box' | 'octahedron' | 'torus';
}

function GeometricShape({ position, scale, color, type }: GeometricShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  const geometry = useMemo(() => {
    switch (type) {
      case 'sphere':
        return new THREE.SphereGeometry(1, 32, 32);
      case 'box':
        return new THREE.BoxGeometry(1.5, 1.5, 1.5);
      case 'octahedron':
        return new THREE.OctahedronGeometry(1.2);
      case 'torus':
        return new THREE.TorusGeometry(1, 0.4, 16, 100);
      default:
        return new THREE.SphereGeometry(1, 32, 32);
    }
  }, [type]);

  const material = useMemo(() => {
    return (
      <MeshTransmissionMaterial
        color={color}
        thickness={0.2}
        roughness={0.1}
        transmission={0.95}
        ior={1.2}
        chromaticAberration={0.02}
        anisotropy={0.1}
        distortion={0.2}
        distortionScale={0.1}
        temporalDistortion={0.1}
      />
    );
  }, [color]);

  return (
    <Float
      speed={random(1, 3)}
      rotationIntensity={random(0.5, 2)}
      floatIntensity={random(1, 3)}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        geometry={geometry}
        castShadow
        receiveShadow
      >
        {material}
      </mesh>
    </Float>
  );
}

export const GeometricShapes: React.FC = () => {
  const shapes = useMemo(() => {
    const shapeTypes: ('sphere' | 'box' | 'octahedron' | 'torus')[] = [
      'sphere', 'box', 'octahedron', 'torus'
    ];
    
    const colors = [
      '#0ea5e9', // Primary blue
      '#d946ef', // Accent purple
      '#06b6d4', // Cyan
      '#8b5cf6', // Violet
      '#ec4899', // Pink
      '#10b981', // Emerald
    ];

    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      position: [
        random(-6, 6),
        random(-3, 3),
        random(-3, 3)
      ] as [number, number, number],
      scale: random(0.5, 1.5),
      color: colors[i % colors.length],
      type: shapeTypes[i % shapeTypes.length]
    }));
  }, []);

  return (
    <>
      {shapes.map((shape) => (
        <GeometricShape
          key={shape.id}
          position={shape.position}
          scale={shape.scale}
          color={shape.color}
          type={shape.type}
        />
      ))}
    </>
  );
};