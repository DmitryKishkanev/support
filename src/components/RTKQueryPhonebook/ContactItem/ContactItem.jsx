import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '@/redux/rtkQueryPhonebook';
import { ContactEl } from 'components/RTKQueryPhonebook/ContactItem/ContactItem.styled';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDeleteContact = contactId => {
    deleteContact(contactId);
  };

  return (
    <ContactEl>
      <div>
        <p>
          {name}: {phone}
        </p>

        <button onClick={() => handleDeleteContact(id)} disabled={isDeleting}>
          {isDeleting && '🗑'} Delete
        </button>
      </div>
    </ContactEl>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
