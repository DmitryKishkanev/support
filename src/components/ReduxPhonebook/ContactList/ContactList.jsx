import ContactItem from '@/components/ReduxPhonebook/ContactItem';
import { ContactBox } from './ContactList.styled';

const ContactList = () => {
  return (
    <ContactBox>
      <ContactItem />
    </ContactBox>
  );
};

export default ContactList;
