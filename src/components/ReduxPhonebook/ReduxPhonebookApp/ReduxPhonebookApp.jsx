import ContactForm from 'components/ReduxPhonebook/ContactForm';
import Filter from 'components/ReduxPhonebook/Filter';
import ContactList from 'components/ReduxPhonebook/ContactList';
import { Container } from 'components/ReduxPhonebook/ReduxPhonebookApp/ReduxPhonebookApp.styled';

export default function ReduxPhonebookApp() {
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
