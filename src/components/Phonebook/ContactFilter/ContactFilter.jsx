import { FilterLabel } from 'components/Phonebook/ContactFilter/ContactFilter.styled';

const ContactFilter = ({ value, onChangeFilter }) => {
  return (
    <FilterLabel>
      <span>Find contacts by name </span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </FilterLabel>
  );
};

export default ContactFilter;
