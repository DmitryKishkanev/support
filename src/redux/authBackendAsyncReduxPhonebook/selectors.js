import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.authBackendPhonebook.items;

export const selectIsLoading = state => state.authBackendPhonebook.isLoading;

export const selectError = state => state.authBackendPhonebook.error;

export const selectFilter = state => state.authBackendPhonebookFilter;

// Мемоизируем через createSelector
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const result = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
    );

    return result.length > 0 ? result : contacts;
  },
);
