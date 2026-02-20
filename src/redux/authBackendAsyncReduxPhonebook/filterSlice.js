import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/authBackendAsyncReduxPhonebook/initialState';

export const authBackendPhonebookFilterSlice = createSlice({
  name: 'authBackendPhonebookFilter',
  initialState: phonebookInitialState.filter,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = authBackendPhonebookFilterSlice.actions;
