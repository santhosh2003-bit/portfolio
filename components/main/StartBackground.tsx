"use client";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarsCanvas = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => {
    // Properly populate the Float32Array with random positions in a sphere
    const positions = random.inSphere(new Float32Array(5000 * 3), {
      radius: 1.2,
    });
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y += delta / 15;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StartBackground = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StartBackground;
