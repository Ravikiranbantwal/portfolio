import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Octahedron, Torus, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#ff0080"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedBox: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime) * 0.8;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <Box ref={meshRef} position={position} args={[1.5, 1.5, 1.5]}>
        <MeshWobbleMaterial
          color="#0066ff"
          attach="material"
          factor={0.6}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Box>
    </Float>
  );
};

const AnimatedOctahedron: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.6;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 1.5) * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
      <Octahedron ref={meshRef} position={position} args={[1.2]}>
        <MeshDistortMaterial
          color="#00ff88"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.7}
        />
      </Octahedron>
    </Float>
  );
};

export const FloatingGeometry: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff0080" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0066ff" />
      <pointLight position={[0, 10, -10]} intensity={0.6} color="#00ff88" />
      
      <AnimatedSphere position={[-4, 2, -2]} />
      <AnimatedBox position={[4, -1, -3]} />
      <AnimatedOctahedron position={[0, -3, -1]} />
      <AnimatedSphere position={[6, 1, -4]} />
      <AnimatedBox position={[-6, -2, -2]} />
      
      {/* Additional Floating Torus */}
      <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.8}>
        <Torus position={[2, 3, -5]} args={[1, 0.4, 16, 32]}>
          <MeshWobbleMaterial
            color="#8b5cf6"
            attach="material"
            factor={0.3}
            speed={1}
            roughness={0.2}
            metalness={0.8}
          />
        </Torus>
      </Float>
    </Canvas>
  );
};