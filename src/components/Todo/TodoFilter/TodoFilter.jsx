import PropTypes from 'prop-types';
import { FilterLabel } from 'components/Todo/TodoFilter/TodoFilter.styled';

const TodoFilter = ({ value, onChangeFilter }) => {
  return (
    <FilterLabel>
      <span className="label__name">Фильтр</span>
      <input
        className="label__field"
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </FilterLabel>
  );
};

TodoFilter.propeTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default TodoFilter;
