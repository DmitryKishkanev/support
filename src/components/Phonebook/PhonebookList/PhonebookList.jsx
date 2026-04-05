import PropTypes from 'prop-types';
import ContactFilter from 'components/Phonebook/ContactFilter';
import {
  Container,
  ContactBox,
  ContactEl,
} from 'components/Phonebook/PhonebookList/PhonebookList.styled';

const PhonebookList = ({
  contacts,
  filter,
  changeFilter,
  onDeleteContact,
  children,
}) => {
  return (
    <Container>
      <h1>Phonebook</h1>
      {children}
      <h2>Contacts</h2>
      <ContactFilter value={filter} onChangeFilter={changeFilter} />
      <ContactBox>
        {contacts.map(({ id, name, number }) => (
          <ContactEl key={id}>
            <div>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </div>
          </ContactEl>
        ))}
      </ContactBox>
    </Container>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PhonebookList;
