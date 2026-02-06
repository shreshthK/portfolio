import { PropsWithChildren, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneConfig, SectionCanvasQualityPolicy } from '@/types/scene';

interface SectionCanvasProps extends PropsWithChildren {
  config: SceneConfig;
  className?: string;
  fallback?: ReactNode;
  qualityPolicy?: SectionCanvasQualityPolicy;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
}

export function SectionCanvas({
  config,
  className,
  fallback,
  qualityPolicy,
  camera,
  children,
}: SectionCanvasProps) {
  const allowOnLow = qualityPolicy?.allowOnLow ?? true;
  const disableInteractionOnLow = qualityPolicy?.disableInteractionOnLow ?? true;
  const shouldRenderCanvas = config.quality !== 'low' || allowOnLow;
  const dpr = config.quality === 'high' ? [1, 2] : config.quality === 'medium' ? [1, 1.5] : [1, 1.25];
  const canInteract = disableInteractionOnLow && config.quality === 'low' ? false : config.interactive;

  if (!shouldRenderCanvas) {
    return <>{fallback}</>;
  }

  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={dpr}
        gl={{ antialias: config.quality !== 'low', alpha: true }}
        onPointerMissed={canInteract ? undefined : () => undefined}
        camera={{ position: camera?.position ?? [0, 0, 6], fov: camera?.fov ?? 45 }}
      >
        {children}
      </Canvas>
    </div>
  );
}
