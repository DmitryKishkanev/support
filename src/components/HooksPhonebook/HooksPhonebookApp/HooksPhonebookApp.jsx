import { useState } from 'react';
import ContactForm from 'components/HooksPhonebook/ContactForm';
import Filter from 'components/HooksPhonebook/Filter';
import ContactList from 'components/HooksPhonebook/ContactList';
import initialContacts from '@/contacts.json';
import { Container } from 'components/HooksPhonebook/HooksPhonebookApp/HooksPhonebookApp.styled';

export default function HooksPhonebookApp() {
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
    const result = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return result.length > 0 ? result : contacts;
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
