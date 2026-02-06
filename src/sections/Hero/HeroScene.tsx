import { useMemo, useRef } from 'react';
import { RootState, useFrame } from '@react-three/fiber';
import { Line, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { SceneConfig } from '@/types/scene';

function Lattice({ interactive, motionEnabled }: { interactive: boolean; motionEnabled: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const points: [number, number, number][] = [];
    const size = 4;

    for (let x = -size; x <= size; x += 2) {
      for (let y = -size; y <= size; y += 2) {
        const z = Math.sin((x + y) * 0.6) * 0.65;
        points.push([x * 0.35, y * 0.2, z]);
      }
    }

    return points;
  }, []);

  const links = useMemo(() => {
    const linePoints: [number, number, number][][] = [];
    for (let i = 0; i < nodes.length - 1; i += 1) {
      const current = nodes[i];
      const next = nodes[i + 1];
      if (Math.abs(current[1] - next[1]) < 0.05) {
        linePoints.push([current, next]);
      }
    }
    return linePoints;
  }, [nodes]);

  useFrame((state: RootState) => {
    if (!groupRef.current) {
      return;
    }

    if (motionEnabled) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.18, 0.03);
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.07;
    }

    if (interactive) {
      const pointerX = state.pointer.x * 0.25;
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, pointerX, 0.03);
    }
  });

  return (
    <group ref={groupRef} position={[0.3, 0.1, -0.2]}>
      {nodes.map((node, index) => (
        <mesh key={index} position={node}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#7ca8ff" emissive="#356fcf" emissiveIntensity={0.55} roughness={0.25} />
        </mesh>
      ))}

      {links.map((segment, index) => (
        <Line key={index} points={segment} color="#3b6bb3" transparent opacity={0.35} lineWidth={0.8} />
      ))}
    </group>
  );
}

export default function HeroScene({ config }: { config: SceneConfig }) {
  const motionEnabled = config.motion === 'full';

  return (
    <>
      <color attach="background" args={['#05070c']} />
      <fog attach="fog" args={['#05070c', 5, 11]} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 2]} intensity={0.7} color="#d7e7ff" />
      <pointLight position={[-3, -1, 3]} intensity={1.1} color="#ff9f43" distance={8} />

      <mesh position={[0, -2.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#0c111a" roughness={0.9} metalness={0.2} />
      </mesh>

      <Lattice interactive={config.interactive} motionEnabled={motionEnabled} />

      <Sparkles
        count={config.quality === 'high' ? 80 : 36}
        scale={[6, 3, 3]}
        size={1.8}
        speed={motionEnabled ? 0.4 : 0}
        color="#7ca8ff"
        opacity={0.35}
      />
    </>
  );
}
