import { useMemo, useRef } from 'react';
import { RootState, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { SceneConfig } from '@/types/scene';
import { TimelineEntry } from '@/data/timeline';

interface TimelineRailSceneProps {
  entries: TimelineEntry[];
  selectedId: string;
  config: SceneConfig;
}

export default function TimelineRailScene({ entries, selectedId, config }: TimelineRailSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeSpacing = 0.68;
  const railHeight = Math.max(3.2, (entries.length - 1) * nodeSpacing + 0.7);

  const nodes = useMemo(
    () => {
      const start = ((entries.length - 1) * nodeSpacing) / 2;
      return entries.map((entry, index) => ({
        id: entry.id,
        y: start - index * nodeSpacing,
      }));
    },
    [entries],
  );

  useFrame((state: RootState) => {
    if (!groupRef.current) {
      return;
    }

    const pulse = config.motion === 'full' ? Math.sin(state.clock.elapsedTime * 0.9) * 0.03 : 0;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0.14 + pulse, 0.04);

    if (config.interactive) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * 0.08, 0.03);
    }
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[2.2, 2.4, 2]} intensity={1.2} color="#8ab3ff" />
      <pointLight position={[-1.8, -0.8, 2.8]} intensity={0.9} color="#ffb06c" />

      <group ref={groupRef} position={[0.5, 0, -0.5]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, railHeight, 24]} />
          <meshStandardMaterial color="#5578a6" emissive="#214062" emissiveIntensity={0.7} />
        </mesh>

        {nodes.map((node) => {
          const active = node.id === selectedId;
          return (
            <group key={node.id} position={[0, node.y, 0]}>
              <mesh>
                <sphereGeometry args={[active ? 0.13 : 0.09, 24, 24]} />
                <meshStandardMaterial
                  color={active ? '#a8c7ff' : '#5a7fb0'}
                  emissive={active ? '#4e8dff' : '#1f426d'}
                  emissiveIntensity={active ? 1.35 : 0.58}
                  roughness={0.25}
                />
              </mesh>

              {active && (
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <ringGeometry args={[0.18, 0.22, 36]} />
                  <meshBasicMaterial color="#9ac0ff" transparent opacity={0.55} />
                </mesh>
              )}

              <mesh position={[0.42, 0, 0]}>
                <boxGeometry args={[0.68, 0.024, 0.024]} />
                <meshStandardMaterial color={active ? '#8fb9f8' : '#365172'} />
              </mesh>
            </group>
          );
        })}
      </group>

      <mesh position={[0, -2.85, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#121c2a" roughness={0.92} metalness={0.15} />
      </mesh>

      <gridHelper args={[8, 24, '#2f4868', '#1a2b41']} position={[0, -2.78, 0]} />
    </>
  );
}
