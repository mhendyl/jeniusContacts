import React from 'react';
import {render} from '@testing-library/react-native';
import {IconUser} from '.';

describe('IconUser', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<IconUser />);
    const svgElement = getByTestId('IconUser');
    expect(svgElement).toBeTruthy();
  });
});
