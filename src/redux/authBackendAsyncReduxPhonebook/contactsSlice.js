import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from '@/redux/authBackendAsyncReduxPhonebook/initialState';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebookOperations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

// const arrThunks = [fetchContacts, addContact, deleteContact];
const arrThunks = [fetchContacts, addContact];

const oneOfTheThunks = type => arrThunks.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledFetch = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  // Добавляем контакт в конец списка
  // state.items.push(action.payload);
  // Добавляем контакт в начало списка
  state.items.unshift(action.payload);
  // Добавляем контакт в начало списка
  // state.items = [action.payload, ...state.items];
};

const handleFulfilledDel = (state, action) => {
  // const index = action.meta.arg;
  const index = action.payload.id;
  state.items = state.items.filter(contact => contact.id !== index);
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

export const authBackendPhonebookSlice = createSlice({
  name: 'authBackendPhonebook',
  initialState: phonebookInitialState.contacts,

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;

    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
      // .addCase(fetchContacts.rejected, handleRejected)
      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      // .addCase(addContact.rejected, handleRejected)
      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDel)
      // .addCase(deleteContact.rejected, handleRejected)
      .addMatcher(
        isAnyOf(
          // fetchContacts.pending,
          // addContact.pending,
          // deleteContact.pending,
          ...oneOfTheThunks(PENDING),
        ),
        handlePending,
      )
      .addMatcher(
        isAnyOf(
          // fetchContacts.fulfilled,
          // addContact.fulfilled,
          // deleteContact.fulfilled,
          ...oneOfTheThunks(FULFILLED),
        ),
        handleFulfilled,
      )
      .addMatcher(
        isAnyOf(
          // fetchContacts.rejected,
          // addContact.rejected,
          // deleteContact.rejected,
          ...oneOfTheThunks(REJECTED),
        ),
        handleRejected,
      );
  },
});
