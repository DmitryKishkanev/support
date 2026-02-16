import PropTypes from 'prop-types';
import MaterialItem from 'components/RTKQueryMaterials/MaterialItem';
import { StyledMaterialList } from 'components/RTKQueryMaterials/MaterialList/MaterialList.styled';

const MaterialList = ({ items }) => {
  return (
    <StyledMaterialList>
      {items.map(item => (
        <li key={item.id}>
          <MaterialItem item={item} />
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
};

export default MaterialList;
