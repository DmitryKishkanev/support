import PropTypes from 'prop-types';
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

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
