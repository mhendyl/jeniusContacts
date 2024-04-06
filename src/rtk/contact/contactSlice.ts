import {createSlice} from '@reduxjs/toolkit';
import {contactInitialState} from './models/initialState';
import {
  createContactNewThunk,
  deleteContactDetailsThunk,
  getAllContactThunk,
  getContactDetailsThunk,
} from './thunk';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    setDisabledCreateNewContact: state => {
      state.createNewContact = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact = action.payload.data;
      })
      .addCase(getAllContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllContactThunk.rejected, state => {
        state.isLoading = false;
        state.contactDetails = null;
        state.error = state.error;
      })
      .addCase(getContactDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactDetails = action.payload.data;
      })
      .addCase(getContactDetailsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactDetailsThunk.rejected, state => {
        state.isLoading = false;
        state.contactDetails = null;
        state.error = state.error;
      })
      .addCase(deleteContactDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactDetails = action.payload.data;
      })
      .addCase(deleteContactDetailsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactDetailsThunk.rejected, state => {
        state.isLoading = false;
        state.contactDetails = null;
        state.error = state.error;
      })
      .addCase(createContactNewThunk.fulfilled, state => {
        state.createNewContact = true;
      })
      .addCase(createContactNewThunk.rejected, state => {
        state.createNewContact = false;
        state.error = state.error;
      });
  },
});

export const {setDisabledCreateNewContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
