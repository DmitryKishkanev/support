import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/AsyncReduxPhonebookAuthBackend/ContactForm';
import Filter from 'components/AsyncReduxPhonebookAuthBackend/Filter';
import ContactList from 'components/AsyncReduxPhonebookAuthBackend/ContactList';
import { Container } from 'components/AsyncReduxPhonebookAuthBackend/AuthBackendPhonebookApp/AuthBackendAsyncReduxPhonebookApp.styled';
import { fetchContacts } from '@/redux/authBackendAsyncReduxPhonebook';

export default function AuthBackendAsyncReduxPhonebookApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      // На первом рендере в консоли будет срабатывать abort() из-за особенности работы React.StrictMode
      if (promise.abort) {
        promise.abort();
        console.log(
          'authBackendPhonebook_fetchContacts: Отмена запроса при размонтировании компонента',
        );
      }
    };
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
