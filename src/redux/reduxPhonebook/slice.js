import { createSlice } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/reduxPhonebook/initialState';

export const reduxPhonebookSlice = createSlice({
  name: 'reduxPhonebook',
  initialState: phonebookInitialState,
  reducers: {
    insertContact: (state, action) => {
      // Добавляем контакт в конец списка
      // state.contacts.push(action.payload);

      // Добавляем контакт в начало списка
      state.contacts.unshift(action.payload);
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
