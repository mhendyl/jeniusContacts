import axios from 'axios';

export const getcontactDetails = async (id: string) => {
  const URL = `https://contact.herokuapp.com/contact/${id}`;
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
