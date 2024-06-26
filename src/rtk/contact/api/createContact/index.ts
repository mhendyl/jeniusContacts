import axios from 'axios';
import {ContactInterface} from '../../models';

export const createNewContactApi = async (params: ContactInterface) => {
  const URL = 'https://contact.herokuapp.com/contact';
  try {
    const response = await axios.post(URL, params, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error get location');
  }
};
