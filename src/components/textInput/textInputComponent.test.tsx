import React from 'react';
import {render} from '@testing-library/react-native';
import {TextInputComponent} from './TextInputComponent';

describe('TextInputComponent', () => {
  test('renders correctly', () => {
    const label = 'Username';
    const testId = 'text-input';
    const value = 'testValue';
    const placeholder = 'Username';

    const onChangeMock = jest.fn();
    const style = jest.fn;

    const {getByTestId} = render(
      <TextInputComponent
        placeholder={placeholder}
        label={label}
        styleCustom={style}
        testId={testId}
        value={value}
        onChange={e => {
          onChangeMock(e);
        }}
      />,
    );

    const textInput = getByTestId(testId);

    expect(textInput).toBeTruthy();
    expect(textInput.props.value).toBe(value);
  });
});
