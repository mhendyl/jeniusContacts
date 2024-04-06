import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ButtonComponent} from './ButtonComponent';

describe('ButtonComponent', () => {
  test('renders correctly', () => {
    const onPressMock = jest.fn();
    const label = 'Submit';

    const {getByTestId, getByText} = render(
      <ButtonComponent onPress={onPressMock} label={label} styleCustom={{}} />,
    );

    const buttonElement = getByTestId(label);
    const textContent = getByText(label);

    expect(buttonElement).toBeTruthy();
    expect(textContent).toBeTruthy();
  });

  test('triggers onPress handler', () => {
    const onPressMock = jest.fn();
    const label = 'Submit';

    const {getByTestId} = render(
      <ButtonComponent onPress={onPressMock} label={label} styleCustom={{}} />,
    );

    const buttonElement = getByTestId(label);
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
