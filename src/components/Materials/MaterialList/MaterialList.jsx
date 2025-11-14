import PropTypes from 'prop-types';
import MaterialItem from 'components/Materials/MaterialItem';
import { StyledMaterialList } from 'components/Materials/MaterialList/MaterialList.styled';

const MaterialList = ({ items, ...otherProps }) => {
  return (
    <StyledMaterialList>
      {items.map(item => (
        <li key={item.id}>
          <MaterialItem item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </StyledMaterialList>
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
