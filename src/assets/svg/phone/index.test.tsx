import React from 'react';
import {render} from '@testing-library/react-native';
import {IconPhone} from '.';

describe('IconPhone', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<IconPhone />);
    const svgElement = getByTestId('IconPhone');
    expect(svgElement).toBeTruthy();
  });
});
