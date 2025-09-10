import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Line } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function usePrimaryColor() {
  return useMemo(() => {
    if (typeof window === "undefined") return new THREE.Color("#3360EF");
    const root = getComputedStyle(document.documentElement);
    const hsl = root.getPropertyValue("--primary").trim();
    return new THREE.Color(`hsl(${hsl})`);
  }, []);
}

function TorusKnot() {
  const mesh = useRef<THREE.Mesh>(null!);
  const color = usePrimaryColor();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.25;
    mesh.current.rotation.y = t * 0.35;
  });
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1.2, 0.28, 220, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.25}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function OrbitRibbon() {
  const color = usePrimaryColor();
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const turns = 3.5;
    const segments = 600;
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2 * turns;
      const r = 2.2 + Math.sin(t * 1.3) * 0.15;
      pts.push(new THREE.Vector3(Math.cos(t) * r, Math.sin(t * 0.7) * 0.6, Math.sin(t) * r));
    }
    return pts;
  }, []);
  return (
    <Line
      points={points}
      color={color.getStyle()}
      lineWidth={1.5}
      transparent
      opacity={0.5}
    />
  );
}

export default function HeroScene() {
  const bg = new THREE.Color(0x000000);
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={[bg.set("transparent" as any)] as any} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <directionalLight position={[-5, -2, -3]} intensity={0.4} />
      <TorusKnot />
      <OrbitRibbon />
      <Environment preset="city" />
    </Canvas>
  );
}
