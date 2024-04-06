import axios from 'axios';

export const deleteContactDetails = async (id: string) => {
  const URL = `https://contact.herokuapp.com/contact/${id}`;
  try {
    const response = await axios.delete(URL, {
      headers: {
        Accept: 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error get location');
  }
};
