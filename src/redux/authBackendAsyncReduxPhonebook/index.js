export {
  fetchContacts,
  addContact,
  deleteContact,
} from './phonebookOperations';

export {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
  selectFilteredContacts,
} from './selectors';

export { setFilter } from './filterSlice';

export { authBackendPhonebookSlice } from './contactsSlice';
export { authBackendPhonebookFilterSlice } from './filterSlice';
