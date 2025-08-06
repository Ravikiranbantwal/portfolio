import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface NetworkNodeProps {
  position: [number, number, number];
  connections: number[];
  allPositions: [number, number, number][];
}

function NetworkNode({ position, connections, allPositions }: NetworkNodeProps) {
  const lineRefs = useRef<THREE.Line[]>([]);
  const nodeRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (nodeRef.current) {
      const intensity = 0.5 + Math.sin(time * 2 + position[0]) * 0.3;
      (nodeRef.current.material as THREE.PointsMaterial).opacity = intensity;
    }
    
    lineRefs.current.forEach((line, index) => {
      if (line && line.material) {
        const pulseSpeed = 3 + index * 0.5;
        const opacity = 0.2 + Math.sin(time * pulseSpeed + index) * 0.3;
        (line.material as THREE.LineBasicMaterial).opacity = Math.max(0.1, opacity);
      }
    });
  });

  const createConnections = () => {
    return connections.map((connectionIndex, index) => {
      const targetPosition = allPositions[connectionIndex];
      if (!targetPosition) return null;

      const points = [
        new THREE.Vector3(...position),
        new THREE.Vector3(...targetPosition)
      ];
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      return (
        <line key={index} geometry={geometry}>
          <lineBasicMaterial
            ref={(ref) => {
              if (ref) lineRefs.current[index] = ref.parent as THREE.Line;
            }}
            color="#00ffff"
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </line>
      );
    });
  };

  return (
    <group>
      <points ref={nodeRef} position={position}>
        <sphereGeometry args={[0.05, 8, 6]} />
        <pointsMaterial
          color="#00ff88"
          size={0.1}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      {createConnections()}
    </group>
  );
}

function NeuralNodes() {
  const positions: [number, number, number][] = [];
  const connections: number[][] = [];
  
  for (let i = 0; i < 100; i++) {
    positions.push([
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10
    ]);
  }
  
  positions.forEach((_, index) => {
    const nodeConnections: number[] = [];
    const numConnections = Math.floor(Math.random() * 4) + 2;
    
    for (let i = 0; i < numConnections; i++) {
      const connectionIndex = Math.floor(Math.random() * positions.length);
      if (connectionIndex !== index && !nodeConnections.includes(connectionIndex)) {
        nodeConnections.push(connectionIndex);
      }
    }
    
    connections.push(nodeConnections);
  });

  return (
    <>
      {positions.map((position, index) => (
        <NetworkNode
          key={index}
          position={position}
          connections={connections[index]}
          allPositions={positions}
        />
      ))}
    </>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!);
  const particleCount = 200;
  
  const positions = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    
    velocities[i * 3] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
  }
  
  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];
        
        if (Math.abs(positions[i * 3]) > 15) velocities[i * 3] *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 7.5) velocities[i * 3 + 2] *= -1;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ff0080"
        size={0.02}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CameraController() {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    state.camera.position.x = Math.sin(time * 0.1) * 2;
    state.camera.position.y = Math.cos(time * 0.15) * 1;
    state.camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function NeuralNetwork() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <CameraController />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#00ffff" />
        <pointLight position={[-10, -10, 5]} intensity={0.2} color="#ff0080" />
        
        <NeuralNodes />
        <ParticleField />
        
        <fog attach="fog" args={['#000000', 8, 25]} />
      </Canvas>
    </div>
  );
}