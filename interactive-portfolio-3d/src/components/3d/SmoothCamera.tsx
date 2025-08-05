import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { lerp } from '@/utils';

interface SmoothCameraProps {
  targetPosition: [number, number, number];
  lookAt?: [number, number, number];
  lerpFactor?: number;
}

export const SmoothCamera: React.FC<SmoothCameraProps> = ({
  targetPosition,
  lookAt = [0, 0, 0],
  lerpFactor = 0.1,
}) => {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3(...targetPosition));
  const lookAtRef = useRef(new THREE.Vector3(...lookAt));

  // Update target position when props change
  React.useEffect(() => {
    targetRef.current.set(...targetPosition);
  }, [targetPosition]);

  React.useEffect(() => {
    lookAtRef.current.set(...lookAt);
  }, [lookAt]);

  useFrame(() => {
    // Smoothly interpolate camera position
    camera.position.x = lerp(camera.position.x, targetRef.current.x, lerpFactor);
    camera.position.y = lerp(camera.position.y, targetRef.current.y, lerpFactor);
    camera.position.z = lerp(camera.position.z, targetRef.current.z, lerpFactor);
    
    // Smoothly look at target
    const currentLookAt = new THREE.Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.multiplyScalar(-1).add(camera.position);
    
    currentLookAt.x = lerp(currentLookAt.x, lookAtRef.current.x, lerpFactor * 0.5);
    currentLookAt.y = lerp(currentLookAt.y, lookAtRef.current.y, lerpFactor * 0.5);
    currentLookAt.z = lerp(currentLookAt.z, lookAtRef.current.z, lerpFactor * 0.5);
    
    camera.lookAt(currentLookAt);
  });

  return null;
};