import PropTypes from 'prop-types';
import MaterialItem from '@/components/RTKQueryMaterials/MaterialItem';
import { StyledMaterialList } from './MaterialList.styled';

const MaterialList = ({ items }) => {
  return (
    <StyledMaterialList>
      {items.map(item => (
        <li key={item.id}>
          <MaterialItem item={item} />
          <hr
            style={{
              borderColor: 'rgb(199, 141, 75)',
            }}
          />
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
