import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useFetchContactsQuery } from '@/redux/rtkQueryPhonebook';
import ContactForm from 'components/RTKQueryPhonebook/ContactForm';
import Filter from 'components/RTKQueryPhonebook/Filter';
import ContactList from 'components/RTKQueryPhonebook/ContactList';
import { Container } from '@/components/RTKQueryPhonebook/RTKQueryPhonebookApp/RTKQueryPhonebookApp.styled';
import { fetchContacts } from '@/redux/asyncReduxPhonebook';

export default function RTKQueryPhonebookApp() {
  const { data, error, isFetching } = useFetchContactsQuery();
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
