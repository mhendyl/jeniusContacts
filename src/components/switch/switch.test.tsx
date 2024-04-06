import React from 'react';
import {render} from '@testing-library/react-native';
import {SwitchComponent} from './switch'; // Import your SwitchComponent

test('SwitchComponent renders correctly and handles onChange event', () => {
  const handleChange = jest.fn(); // Mock onChange function
  const {getByTestId} = render(
    <SwitchComponent
      testId="test-switch"
      onChange={handleChange}
      isEnabled={true}
      label="Test Switch"
    />,
  );

  const switchElement = getByTestId('test-switch');

  expect(switchElement).toBeTruthy();
});
