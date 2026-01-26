export const selectContacts = state => state.asyncReduxPhonebook.items;

export const selectIsLoading = state => state.asyncReduxPhonebook.isLoading;

export const selectError = state => state.asyncReduxPhonebook.error;

export const selectFilter = state => state.asyncReduxPhonebookFilter;
