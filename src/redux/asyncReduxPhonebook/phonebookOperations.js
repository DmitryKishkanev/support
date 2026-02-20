import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConnections } from './apiConnections';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkApi) => {
    try {
      const response = await apiConnections.get('/contacts', {
        signal: thunkApi.signal,
      });
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      // Для проверки прерывания http - запроса, при размонтировании компонента
      // await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await apiConnections.post('/contacts', contact, {
        signal: thunkApi.signal,
      });
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await apiConnections.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
