import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '@/redux/reduxPhonebook/slice';
import { ContactEl } from 'components/ReduxPhonebook/ContactItem/ContactItem.styled';

const ContactItem = () => {
  const { contacts, filter } = useSelector(state => state.reduxPhonebook);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const contactsToRender =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  return (
    <>
      {contactsToRender.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {number}
            </p>

            <button onClick={() => handleDeleteContact(id)}>Delete</button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;
