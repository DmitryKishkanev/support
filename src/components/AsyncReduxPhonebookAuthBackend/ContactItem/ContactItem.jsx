import { useDispatch, useSelector } from 'react-redux';
import { ContactEl } from 'components/AsyncReduxPhonebookAuthBackend/ContactItem/ContactItem.styled';
import {
  selectFilteredContacts,
  deleteContact,
} from '@/redux/authBackendAsyncReduxPhonebook';

const ContactItem = () => {
  // Перенесли фильтрацию в selectors
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <div>
            <p>
              {name}: {number}
            </p>

            <button onClick={() => handleDeleteContact(id)}>Удалить</button>
            <button>Изменить</button>
          </div>
        </ContactEl>
      ))}
    </>
  );
};

export default ContactItem;

// import { useDispatch } from 'react-redux';
// import { ContactEl } from 'components/AsyncReduxPhonebookAuthBackend/ContactItem/ContactItem.styled';
// import { deleteContact } from '@/redux/authBackendAsyncReduxPhonebook';

// const ContactItem = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   return (
//     <ContactEl key={id}>
//       <div>
//         <p>
//           {name}: {number}
//         </p>

//         <button onClick={() => handleDeleteContact(id)}>Delete</button>
//       </div>
//     </ContactEl>
//   );
// };

// export default ContactItem;
