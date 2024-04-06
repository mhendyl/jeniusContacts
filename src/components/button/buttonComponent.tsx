import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import {TextComponent} from '../text';
import styles from './style';

interface ButtonComponentInterface {
  onPress: () => void;
  label: string;
  styleCustom?: object;
  styleTextCustom?: object;
}

export const ButtonComponent = ({
  onPress,
  label,
  styleCustom,
  styleTextCustom,
}: PropsWithChildren<ButtonComponentInterface>) => {
  return (
    <TouchableOpacity
      style={[styles.basicStyle, styleCustom]}
      accessibilityRole="button"
      onPress={onPress}>
      <TextComponent
        styleContainerText={
          styleTextCustom ? styleTextCustom : styles.textStyle
        }
        label={label}
        testId={label}
      />
    </TouchableOpacity>
  );
};
