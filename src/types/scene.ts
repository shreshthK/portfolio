export type QualityTier = 'high' | 'medium' | 'low';

export type MotionMode = 'full' | 'reduced';

export interface SceneConfig {
  quality: QualityTier;
  motion: MotionMode;
  interactive: boolean;
}

export interface SectionCanvasQualityPolicy {
  allowOnLow?: boolean;
  disableInteractionOnLow?: boolean;
}
