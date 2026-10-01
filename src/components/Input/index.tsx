import React, { useState } from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  Text,
  TextInput,
  View,
  KeyboardTypeOptions,
  TextInputProps,
} from 'react-native';

import Colors from '@/constants/Colors';
import { styles } from './styles';

interface InputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  textError?: string;

  onFocus?: TextInputProps['onFocus'];
  onBlur?: TextInputProps['onBlur'];

  renderRightIcon?: React.ReactNode;
  renderLeftIcon?: React.ReactNode;

  maxLength?: number;
  value?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText?: (value: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  disabled?: boolean;
}

export const Input = ({
  inputContainerStyle,
  secureTextEntry,
  containerStyle,
  inputStyle,
  textErrorStyle,
  value,
  placeholder = '',
  textError,
  onFocus,
  onBlur,
  onChangeText,
  renderLeftIcon,
  renderRightIcon,
  maxLength,
  keyboardType,
  multiline = false,
  numberOfLines = 1,
  disabled = false,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus: TextInputProps['onFocus'] = (event) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur: TextInputProps['onBlur'] = (event) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  return (
    <View style={containerStyle}>
      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          isFocused && styles.isFocusBorder,
          disabled && styles.disabled,
        ]}
      >
        <View style={styles.textInput}>
          {renderLeftIcon && (
            <View style={styles.renderLeftIcon}>
              {renderLeftIcon}
            </View>
          )}

          <View style={styles.wrapInput}>
            <TextInput
              style={[styles.input, inputStyle]}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={Colors.PlaceholderTextColor}
              onChangeText={onChangeText}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={maxLength}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
              numberOfLines={numberOfLines}
              editable={!disabled}
              autoCapitalize="none"
            />
          </View>

          {renderRightIcon && (
            <View style={styles.renderRightIcon}>
              {renderRightIcon}
            </View>
          )}
        </View>
      </View>

      {textError ? (
        <Text style={[styles.textError, textErrorStyle]}>
          {textError}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;
