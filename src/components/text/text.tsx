import React from 'react'; // Import React
import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import styles from './style';

interface TextProps {
  label: string | undefined;
  testId: string;
  styleContainerText?: object;
}

export const TextComponent = ({
  label,
  testId,
  styleContainerText,
}: PropsWithChildren<TextProps>) => {
  return (
    <Text
      style={styleContainerText ? styleContainerText : styles.basicStyle}
      accessibilityHint={label}
      accessibilityLabel={label}
      testID={testId}>
      {label}
    </Text>
  );
};
