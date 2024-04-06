import axios from 'axios';

export const getAllContact = async () => {
  const URL = 'https://contact.herokuapp.com/contact';
  try {
    const response = await axios.get(URL, {
      headers: {
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error get location');
  }
};
