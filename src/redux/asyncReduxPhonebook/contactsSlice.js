import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/asyncReduxPhonebook/initialState';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebookOperations';

const handlePending = state => {
  state.isLoading = true;
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
//   console.log('DEBUG rejected action:', action);
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  // Обработка ошибки при прерывании http - запроса
  if (action.error.name === 'AbortError') {
    console.log('Запрос был отменён');
  } else {
    state.error = action.payload;
  }
};

export const asyncReduxPhonebookSlice = createSlice({
  name: 'asyncReduxPhonebook',
  initialState: phonebookInitialState.contacts,

  extraReducers: builder => {
    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      // .addCase(fetchContacts.rejected, handleRejected)
      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Добавляем контакт в конец списка
        // state.items.push(action.payload);
        // Добавляем контакт в начало списка
        state.items.unshift(action.payload);
        // Добавляем контакт в начало списка
        // state.items = [action.payload, ...state.items];
      })
      // .addCase(addContact.rejected, handleRejected)
      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // const index = action.meta.arg;
        const index = action.payload.id;
        state.items = state.items.filter(contact => contact.id !== index);
      })
      // .addCase(deleteContact.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
        ),
        handleRejected,
      );
  },
});
