import React from 'react';
import {Switch} from 'react-native';

interface SwitchProps {
  testId: string;
  onChange: (value: boolean) => void;
  isEnabled: boolean;
  label: string;
}

export const SwitchComponent = ({
  testId,
  onChange,
  isEnabled,
  label,
}: SwitchProps) => {
  return (
    <Switch
      accessibilityLabel={label}
      testID={testId}
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      value={isEnabled}
    />
  );
};
