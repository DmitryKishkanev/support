import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactEl,
  ContactContentBox,
  ContactContent,
  ContactContentButtonBox,
} from 'components/AsyncReduxPhonebookAuthBackend/ContactItem/ContactItem.styled';
import {
  selectFilteredContacts,
  deleteContact,
} from '@/redux/authBackendAsyncReduxPhonebook';
import Modal from 'components/Modal/Modal';
import EditContactModal from 'components/AsyncReduxPhonebookAuthBackend/EditContactModal';

const ContactItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Перенесли фильтрацию в selectors
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  // const handleUpdateContact = contactId => {
  //   dispatch(updateContact(contactId));
  // };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <ContactContentBox>
            <ContactContent>
              {name}: {number}
            </ContactContent>

            <ContactContentButtonBox>
              <button type="button" onClick={() => handleDeleteContact(id)}>
                Delete
              </button>
              <button type="button" onClick={toggleModal}>
                Edit
              </button>
            </ContactContentButtonBox>
          </ContactContentBox>

          {isModalOpen && (
            <Modal onClose={toggleModal}>
              <EditContactModal onClose={toggleModal} contactId={id} />
            </Modal>
          )}
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
