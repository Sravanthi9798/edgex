import React, { ReactNode } from 'react';
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { normalize } from '@/constants/normalize';
import styles from './styles';

const HIT_SLOP = {
  top: normalize(10),
  bottom: normalize(10),
  left: normalize(10),
  right: normalize(10),
};

export interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
  onRightPress?: () => void;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;

  showBackButton?: boolean;
  showRightButton?: boolean;
}

export default function Header({
  title,
  onBackPress,
  onRightPress,
  leftIcon,
  rightIcon,
  containerStyle,
  titleStyle,
  leftContainerStyle,
  rightContainerStyle,
  showBackButton = true,
  showRightButton = false,
}: HeaderProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left */}
      <View style={[styles.sideContainer, styles.leftContainer]}>
        {showBackButton && (
          <Pressable
            onPress={onBackPress}
            hitSlop={HIT_SLOP}
            style={leftContainerStyle}
          >
            {leftIcon}
          </Pressable>
        )}
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        {typeof title === 'string' ? (
          <Text
            numberOfLines={1}
            style={[styles.title, titleStyle]}
          >
            {title}
          </Text>
        ) : (
          title
        )}
      </View>

      {/* Right */}
      <View style={[styles.sideContainer, styles.rightContainer]}>
        {showRightButton && (
          <Pressable
            onPress={onRightPress}
            hitSlop={HIT_SLOP}
            style={rightContainerStyle}
          >
            {rightIcon}
          </Pressable>
        )}
      </View>
    </View>
  );
}
