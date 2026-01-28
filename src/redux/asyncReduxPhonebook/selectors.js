import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.asyncReduxPhonebook.items;

export const selectIsLoading = state => state.asyncReduxPhonebook.isLoading;

export const selectError = state => state.asyncReduxPhonebook.error;

export const selectFilter = state => state.asyncReduxPhonebookFilter;

// Мемоизируем через createSelector
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
    );
  },
);
