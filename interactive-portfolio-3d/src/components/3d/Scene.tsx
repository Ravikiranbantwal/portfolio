import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { GeometricShapes } from './GeometricShapes';
import { ParticleField } from './ParticleField';
import { FloatingCubes } from './FloatingCubes';

interface SceneProps {
  enableControls?: boolean;
  enableEffects?: boolean;
  cameraPosition?: [number, number, number];
  className?: string;
}

function SceneContent({ enableControls = true, enableEffects = true }: Omit<SceneProps, 'className'>) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={0.5} />
      <pointLight position={[10, -10, 10]} color="#d946ef" intensity={0.5} />

      {/* 3D Objects */}
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <GeometricShapes />
        </Float>
        
        <FloatingCubes count={20} />
        <ParticleField count={1000} />
        
        {/* Ground */}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.3}
          scale={50}
          blur={2}
          far={4}
        />
      </Suspense>

      {/* Environment */}
      <Environment preset="night" />

      {/* Controls */}
      {enableControls && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />
      )}

      {/* Post-processing Effects */}
      {enableEffects && (
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
          />
          <ChromaticAberration 
            offset={new THREE.Vector2(0.001, 0.001)}
            radialModulation={false}
            modulationOffset={0}
          />
          <Vignette eskil={false} offset={0.1} darkness={0.9} />
        </EffectComposer>
      )}
    </>
  );
}

export const Scene: React.FC<SceneProps> = ({
  enableControls = true,
  enableEffects = true,
  cameraPosition = [0, 0, 8],
  className = '',
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{
          position: cameraPosition,
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <SceneContent 
          enableControls={enableControls}
          enableEffects={enableEffects}
        />
      </Canvas>
    </div>
  );
};