import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/AsyncReduxPhonebook/ContactForm';
import Filter from 'components/AsyncReduxPhonebook/Filter';
import ContactList from 'components/AsyncReduxPhonebook/ContactList';
import { Container } from 'components/AsyncReduxPhonebook/AsyncReduxPhonebookApp/AsyncReduxPhonebookApp.styled';
import { fetchContacts } from '@/redux/asyncReduxPhonebook';

export default function AsyncReduxPhonebookApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      // На первом рендере в консоли будет срабатывать abort() из-за особенности работы React.StrictMode
      if (promise.abort) {
        promise.abort();
        console.log(
          'asyncReduxPhonebook_fetchContacts: Отмена запроса при размонтировании компонента',
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
