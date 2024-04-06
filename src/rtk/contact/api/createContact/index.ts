import axios from 'axios';
import {ContactInterface} from '../../models';

export const createNewContactApi = async (params: ContactInterface) => {
  const URL = 'https://contact.herokuapp.com/contact';
  try {
    const response = await axios.post(URL, params, {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log('>>> response', response);
    return response.data;
  } catch (error) {
    console.log('>>> err', error);
    throw new Error('Error get location');
  }
};
