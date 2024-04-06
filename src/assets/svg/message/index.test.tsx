import React from 'react';
import {render} from '@testing-library/react-native';
import {IconMessage} from '.';

describe('IconMessage', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<IconMessage />);
    const svgElement = getByTestId('IconMessage');
    expect(svgElement).toBeTruthy();
  });
});
