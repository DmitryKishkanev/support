import React from 'react';

const PhonebookList = ({ contacts, children }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      {children}
      <h1>Contacts</h1>
      <ul>
        {contacts.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookList;
