import { useState } from 'react';
import ContactForm from 'components/ReduxPhonebook/ContactForm';
import Filter from 'components/ReduxPhonebook/Filter';
import ContactList from 'components/ReduxPhonebook/ContactList';
import initialContacts from '@/contacts.json';
import { Container } from 'components/ReduxPhonebook/ReduxPhonebookApp/ReduxPhonebookApp.styled';

export default function ReduxPhonebookApp() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const isNamePresent = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isNamePresent) {
      alert(`"${newContact.name}" is already in contacts `);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredCntacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={getFilteredCntacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}
