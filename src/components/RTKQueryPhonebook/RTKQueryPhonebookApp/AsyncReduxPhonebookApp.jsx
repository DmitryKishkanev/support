import { useState } from 'react';
import ContactForm from 'components/RTKQueryPhonebook/ContactForm';
import Filter from 'components/RTKQueryPhonebook/Filter';
import ContactList from 'components/RTKQueryPhonebook/ContactList';
import { Container } from '@/components/RTKQueryPhonebook/RTKQueryPhonebookApp/RTKQueryPhonebookApp.styled';

export default function RTKQueryPhonebookApp() {
  const [filter, setFilter] = useState('');

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={setFilter} />
      <ContactList filter={filter} />
    </Container>
  );
}
