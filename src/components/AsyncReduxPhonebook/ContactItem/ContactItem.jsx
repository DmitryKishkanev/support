import { useDispatch, useSelector } from 'react-redux';
import { ContactEl } from 'components/AsyncReduxPhonebook/ContactItem/ContactItem.styled';
import { selectFilteredContacts } from '@/redux/asyncReduxPhonebook/selectors';
import { deleteContact } from '@/redux/asyncReduxPhonebook/phonebookOperations';

const ContactItem = () => {
  // Перенесли фильтрацию в selectors
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

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
