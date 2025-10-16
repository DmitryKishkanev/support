import PropTypes from 'prop-types';
import MaterialItem from 'components/Materials/MaterialItem';

const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MaterialItem item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

MaterialList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default MaterialList;
