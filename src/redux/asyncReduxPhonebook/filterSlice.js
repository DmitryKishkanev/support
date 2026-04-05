import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/asyncReduxPhonebook/initialState';

export const asyncReduxPhonebookFilterSlice = createSlice({
  name: 'asyncReduxPhonebookFilter',
  initialState: phonebookInitialState.filter,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

export const { setFilter } = asyncReduxPhonebookFilterSlice.actions;
