import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/AsyncReduxPhonebook/ContactForm';
import Filter from 'components/AsyncReduxPhonebook/Filter';
import ContactList from 'components/AsyncReduxPhonebook/ContactList';
import { Container } from 'components/AsyncReduxPhonebook/AsyncReduxPhonebookApp/AsyncReduxPhonebookApp.styled';
import { fetchContacts } from '@/redux/asyncReduxPhonebook/phonebookOperations';

export default function AsyncReduxPhonebookApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
