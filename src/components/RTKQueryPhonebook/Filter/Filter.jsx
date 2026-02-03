import PropTypes from 'prop-types';
import { FilterLabel } from 'components/RTKQueryPhonebook/Filter/Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  const handleChange = e => {
    onChangeFilter(e.currentTarget.value);
  };

  return (
    <FilterLabel>
      <span>Find contacts by name </span>
      <input type="text" name="filter" value={value} onChange={handleChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
