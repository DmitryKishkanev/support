import ContactItem from '@/components/AsyncReduxPhonebook/ContactItem';
import { ContactBox } from '@/components/AsyncReduxPhonebook/ContactList/ContactList.styled.js';

const ContactList = () => {
  return (
    <ContactBox>
      <ContactItem />
    </ContactBox>
  );
};

export default ContactList;
