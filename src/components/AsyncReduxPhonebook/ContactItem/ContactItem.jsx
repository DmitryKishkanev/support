import { useDispatch, useSelector } from 'react-redux';
import { ContactEl } from 'components/AsyncReduxPhonebook/ContactItem/ContactItem.styled';
import {
  selectContacts,
  selectFilter,
} from '@/redux/asyncReduxPhonebook/selectors';
import { deleteContact } from '@/redux/asyncReduxPhonebook/phonebookOperations';

const ContactItem = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {phone}
            </p>

            <button onClick={() => handleDeleteContact(id)}>Delete</button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;
