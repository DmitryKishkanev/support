import { useMemo } from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/RTKQueryPhonebook/ContactItem';
import { ContactBox } from 'components/RTKQueryPhonebook/ContactList/ContactList.styled';
import { useFetchContactsQuery } from '@/redux/rtkQueryPhonebook';
import { filterContacts } from '@/redux/rtkQueryPhonebook';

const ContactList = ({ filter }) => {
  const { data: contacts } = useFetchContactsQuery();
  const filteredContacts = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter],
  );
  return (
    <ContactBox>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ContactBox>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactList;
