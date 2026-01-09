import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/reduxPhonebook/initialState';

export const reduxPhonebookSlice = createSlice({
  name: 'reduxPhonebook',
  initialState: phonebookInitialState,
  reducers: {
    insertContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload,
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { insertContact, removeContact, setFilter } =
  reduxPhonebookSlice.actions;
