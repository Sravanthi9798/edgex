import { ReactNode } from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import { normalize } from '@/constants/normalize';

const HIT_SLOP = {
  top: normalize(10),
  bottom: normalize(10),
  left: normalize(10),
  right: normalize(10),
};

export interface ButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  icon?: ReactNode;
  disabled?: boolean;
  secondary?: boolean;
}

export default function Button({
  text,
  style,
  secondary = false,
  disabled = false,
  icon,
  onPress,
  textStyle,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={HIT_SLOP}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        secondary && styles.secondary,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      {icon && (
        <View style={styles.iconContainer}>
          {icon}
        </View>
      )}

      <Text
        numberOfLines={1}
        style={[
          styles.text,
          secondary && styles.secondaryText,
          textStyle,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
