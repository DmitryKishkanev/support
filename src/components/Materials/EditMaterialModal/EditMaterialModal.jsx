import PropTypes from 'prop-types';
import { MaterialModalContainer } from 'components/Materials/EditMaterialModal/EditMaterialModal.styled';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <MaterialModalContainer>
      <h2>Редактировать материал</h2>

      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Редактировать
      </button>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </MaterialModalContainer>
  );
};

EditMaterialModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditMaterialModal;
