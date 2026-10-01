import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Base design width.
// If your Figma/design is based on 375px, keep this as 375.
const BASE_WIDTH = 375;

export const normalize = (size: number): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;

  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
