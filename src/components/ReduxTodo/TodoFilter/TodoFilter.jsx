import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/redux/reduxTodoTemp/slice';
import { FilterLabel } from 'components/Todo/TodoFilter/TodoFilter.styled';

const TodoFilter = () => {
  const filter = useSelector(state => state.reduxTodo.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      <span className="label__name">Фильтр</span>
      <input
        className="label__field"
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterLabel>
  );
};

export default TodoFilter;
