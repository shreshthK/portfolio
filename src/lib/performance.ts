import { useEffect, useMemo, useState } from 'react';
import { MotionMode, QualityTier, SceneConfig } from '@/types/scene';

function detectQualityTier(): QualityTier {
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
  const memory =
    typeof navigator !== 'undefined' && 'deviceMemory' in navigator
      ? (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8
      : 8;
  const width = typeof window !== 'undefined' ? window.innerWidth : 1440;

  if (memory <= 2 || width < 640 || dpr > 2.25) {
    return 'low';
  }

  if (memory <= 4 || width < 1024 || dpr > 1.75) {
    return 'medium';
  }

  return 'high';
}

function detectMotionMode(): MotionMode {
  if (typeof window === 'undefined') {
    return 'full';
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return prefersReduced ? 'reduced' : 'full';
}

export function getInitialSceneConfig(): SceneConfig {
  return {
    quality: detectQualityTier(),
    motion: detectMotionMode(),
    interactive: detectMotionMode() === 'full',
  };
}

export function useSceneConfig(): SceneConfig {
  const [quality, setQuality] = useState<QualityTier>(() => detectQualityTier());
  const [motion, setMotion] = useState<MotionMode>(() => detectMotionMode());

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onMediaChange = () => {
      setMotion(media.matches ? 'reduced' : 'full');
    };

    const onResize = () => {
      setQuality(detectQualityTier());
    };

    media.addEventListener('change', onMediaChange);
    window.addEventListener('resize', onResize);

    return () => {
      media.removeEventListener('change', onMediaChange);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return useMemo(
    () => ({
      quality,
      motion,
      interactive: motion === 'full' && quality !== 'low',
    }),
    [motion, quality],
  );
}
