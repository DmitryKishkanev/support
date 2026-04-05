import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConnectionsMockapi } from './apiConnectionsMockapi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (__, thunkApi) => {
    try {
      const response = await apiConnectionsMockapi.get('/contacts', {
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

      const response = await apiConnectionsMockapi.post('/contacts', contact, {
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
      const response = await apiConnectionsMockapi.delete(
        `/contacts/${contactId}`,
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
);
