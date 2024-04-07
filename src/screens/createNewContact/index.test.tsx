import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CreateNewContact from './';

describe('<CreateNewContact />', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<CreateNewContact navigation={undefined} />);
    expect(getByTestId('firstName')).toBeTruthy();
  });

  test('allows user to enter first name', () => {
    const {getByPlaceholderText} = render(
      <CreateNewContact navigation={undefined} />,
    );
    const firstNameInput = getByPlaceholderText('First Name');
    fireEvent.changeText(firstNameInput, 'John');
    expect(firstNameInput.props.value).toBe('John');
  });

  test('allows user to enter last name', () => {
    const {getByPlaceholderText} = render(
      <CreateNewContact navigation={undefined} />,
    );
    const lastNameInput = getByPlaceholderText('Last Name');
    fireEvent.changeText(lastNameInput, 'Doe');
    expect(lastNameInput.props.value).toBe('Doe');
  });

  test('allows user to enter age', () => {
    const {getByPlaceholderText} = render(
      <CreateNewContact navigation={undefined} />,
    );
    const ageInput = getByPlaceholderText('Age');
    fireEvent.changeText(ageInput, '30');
    expect(ageInput.props.value).toBe('30');
  });

  test('allows user to select image', () => {
    const {getByText} = render(<CreateNewContact navigation={undefined} />);
    const selectImageBtn = getByText('Select Photos');
    fireEvent.press(selectImageBtn);
  });

  test('allows user to save contact', async () => {
    const {getByText, getByPlaceholderText} = render(
      <CreateNewContact navigation={undefined} />,
    );
    const firstNameInput = getByPlaceholderText('First Name');
    const lastNameInput = getByPlaceholderText('Last Name');
    const ageInput = getByPlaceholderText('Age');
    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(ageInput, '30');
    const saveButton = getByText('Save');
    fireEvent.press(saveButton);
  });
});
