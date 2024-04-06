import React from 'react';
import {render} from '@testing-library/react-native';
import {TextComponent} from './index';
describe('TextComponent', () => {
  test('renders correctly', () => {
    const label = 'Hello, World!';
    const testId = 'text-component';

    const {getByTestId, getByText} = render(
      <TextComponent label={label} testId={testId} />,
    );

    const textElement = getByTestId(testId);
    const textContent = getByText(label);

    expect(textElement).toBeTruthy();
    expect(textContent).toBeTruthy();
  });
});
