import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAllContact} from '../api/getContact';
import {getcontactDetails} from '../api/getContactDetails';
import {createNewContactApi} from '../api/createContact';
import {ContactInterface} from '../models';
import {deleteContactDetails} from '../api/deleteContact';
import {Alert} from 'react-native';
import {editContactApi} from '../api/editContact';

export const getAllContactThunk = createAsyncThunk(
  'contact/getContact',
  async () => {
    try {
      return await getAllContact();
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong', error);
    }
  },
);

export const getContactDetailsThunk = createAsyncThunk(
  'contact/getContactDetails',
  async (id: string) => {
    console.log('>>> hit', id);
    try {
      return await getcontactDetails(id);
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong', error);
    }
  },
);

export const deleteContactDetailsThunk = createAsyncThunk(
  'contact/deleteContactDetails',
  async (id: string) => {
    try {
      return await deleteContactDetails(id);
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong', error);
    }
  },
);

export const createContactNewThunk = createAsyncThunk(
  'contact/createContactDetails',
  async (params: ContactInterface) => {
    try {
      return await createNewContactApi(params);
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong', error);
    }
  },
);

export const editContactNewThunk = createAsyncThunk(
  'contact/editContactDetails',
  async ({params, id}: {params: ContactInterface; id: string}) => {
    try {
      return await editContactApi({params, id});
    } catch (error) {
      console.error(error);
      Alert.alert('Something went wrong', error);
    }
  },
);
