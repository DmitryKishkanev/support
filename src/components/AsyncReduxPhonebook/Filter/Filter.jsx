import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '@/redux/asyncReduxPhonebook/filterSlice';
import { FilterLabel } from 'components/AsyncReduxPhonebook/Filter/Filter.styled';
import { selectFilter } from '@/redux/asyncReduxPhonebook/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      <span>Find contacts by name </span>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
};

export default Filter;
