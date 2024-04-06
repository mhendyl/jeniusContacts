import React, {PropsWithChildren} from 'react';
import {KeyboardType, TextInput} from 'react-native';
import styles from './style';

interface PropsInterface {
  onChange: (value: string) => void;
  value: string;
  label: string;
  testId: string;
  placeholder: string;
  keyboardType?: KeyboardType;
  styleCustom?: object;
  placeholderTextColor?: string;
}

export const TextInputComponent = ({
  onChange,
  value,
  label,
  testId,
  placeholder,
  keyboardType = 'default',
  styleCustom,
  placeholderTextColor,
}: PropsWithChildren<PropsInterface>) => {
  const handleTextChange = (thisText: string) => {
    onChange(thisText);
  };
  return (
    <TextInput
      style={[styles.basicStyle, styleCustom]}
      placeholder={placeholder}
      accessibilityLabel={label}
      accessibilityHint={label}
      testID={testId}
      onChangeText={handleTextChange}
      value={value}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
