import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/asyncReduxPhonebook/initialState';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebookOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const asyncReduxPhonebookSlice = createSlice({
  name: 'asyncReduxPhonebook',
  initialState: phonebookInitialState.contacts,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = action.meta.arg;
        state.items = state.items.filter(contact => contact.id !== index);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});
