import axios from 'axios';
import {ContactInterface} from '../../models';

export const editContactApi = async ({
  params,
  id,
}: {
  params: ContactInterface;
  id: string;
}) => {
  const URL = `https://contact.herokuapp.com/contact${id}`;
  try {
    const response = await axios.put(URL, params, {
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
