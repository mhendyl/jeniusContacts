import {createAsyncThunk} from '@reduxjs/toolkit';
import {getAllContact} from '../api/getContact';
import {getcontactDetails} from '../api/getContactDetails';
import {createNewContactApi} from '../api/createContact';
import {ContactInterface} from '../models';

export const getAllContactThunk = createAsyncThunk(
  'contact/getContact',
  async () => {
    try {
      return await getAllContact();
    } catch (error) {
      throw error;
    }
  },
);

export const getContactDetailsThunk = createAsyncThunk(
  'contact/getContactDetails',
  async (id: string) => {
    try {
      return await getcontactDetails(id);
    } catch (error) {
      throw error;
    }
  },
);

export const deleteContactDetailsThunk = createAsyncThunk(
  'contact/deleteContactDetails',
  async (id: string) => {
    try {
      return await getcontactDetails(id);
    } catch (error) {
      throw error;
    }
  },
);

export const createContactNewThunk = createAsyncThunk(
  'contact/createContactDetails',
  async (params: ContactInterface) => {
    try {
      return await createNewContactApi(params);
    } catch (error) {
      throw error;
    }
  },
);
