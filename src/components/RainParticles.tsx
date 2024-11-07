import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

// Define the type for the rain particle positions
type ParticlePosition = [number, number, number];

export default function RainParticles() {
  const rainRef = useRef<THREE.InstancedMesh>(null); // Type the ref as InstancedMesh

  // Create a basic cylinder geometry for the raindrops
  const geometry = useMemo(() => {
    return new THREE.CylinderGeometry(0.01, 0.01, 0.2, 8);
  }, []);

  // Create multiple positions for raindrops
  const particles = useMemo<ParticlePosition[]>(() => {
    const positions: ParticlePosition[] = [];
    for (let i = 0; i < 1500; i++) {
      positions.push([
        (Math.random() - 0.5) * 10, // Random x position
        Math.random() * 10, // Random y position (start at the top)
        (Math.random() - 0.5) * 10, // Random z position
      ]);
    }
    return positions;
  }, []);

  // Animate raindrop positions to fall downward
  useFrame((_, delta) => {
    if (!rainRef.current) return; // Check if rainRef.current is available
    particles.forEach((pos, i) => {
      pos[1] -= delta * 5; // Adjust speed of fall
      if (pos[1] < -5) pos[1] = 10; // Reset to top once it falls past a point
      const matrix = new THREE.Matrix4().setPosition(pos[0], pos[1], pos[2]); // Create a matrix for each position
      rainRef.current && rainRef.current.setMatrixAt(i, matrix);
    });
    rainRef.current.instanceMatrix.needsUpdate = true;
  });

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({ color: "blue" });
  }, []);

  return (
    <motion.instancedMesh
      ref={rainRef as any} // Type assertion
      args={[geometry, material, particles.length]} // Pass the geometry here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <meshStandardMaterial color="gray" />
    </motion.instancedMesh>
  );
}
