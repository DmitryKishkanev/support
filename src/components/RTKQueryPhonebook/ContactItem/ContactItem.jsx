import { useDispatch, useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '@/redux/rtkQueryPhonebook';
import { ContactEl } from 'components/RTKQueryPhonebook/ContactItem/ContactItem.styled';
import {
  selectFilteredContacts,
  deleteContact,
} from '@/redux/asyncReduxPhonebook';

const ContactItem = () => {
  const { data: contacts, isFatching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // Перенесли фильтрацию в selectors
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));

    deleteContact(contactId);
  };

  return (
    <>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {phone}
            </p>

            <button
              onClick={() => handleDeleteContact(id)}
              disabled={isDeleting}
            >
              {isDeleting && 'Deleting...'}Delete
            </button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;
