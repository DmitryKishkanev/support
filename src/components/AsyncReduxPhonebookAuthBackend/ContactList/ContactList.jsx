import ContactItem from 'components/AsyncReduxPhonebookAuthBackend/ContactItem';
import { ContactBox } from 'components/AsyncReduxPhonebookAuthBackend/ContactList/ContactList.styled';

const ContactList = () => {
  return (
    <ContactBox>
      <ContactItem />
    </ContactBox>
  );
};

export default ContactList;

// import { useSelector } from 'react-redux';
// import ContactItem from 'components/AsyncReduxPhonebookAuthBackend/ContactItem';
// import { selectFilteredContacts } from '@/redux/authBackendAsyncReduxPhonebook';
// import { ContactBox } from 'components/AsyncReduxPhonebookAuthBackend/ContactList/ContactList.styled';

// const ContactList = () => {
//   const filteredContacts = useSelector(selectFilteredContacts);

//   return (
//     <ContactBox>
//       {filteredContacts.map(contact => (
//         <ContactItem key={contact.id} {...contact} />
//       ))}
//     </ContactBox>
//   );
// };

// export default ContactList;
