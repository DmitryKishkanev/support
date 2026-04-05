import PropTypes from 'prop-types';
import {
  MaterialModalContainer,
  MaterialModalTitle,
  MaterialModalFieldsContainer,
  MaterialModalFieldsName,
  MaterialModalButtonsBox,
} from 'components/RTKQueryMaterials/EditMaterialModal/EditMaterialModal.styled';
import { useFetchMaterialByIdQuery } from '@/redux/rtkQueryMaterials';

const EditMaterialModal = ({ materialId, onClose, onEdit }) => {
  // При запросе fetchMaterialById –  id передаём в сам хук
  const { data: material } = useFetchMaterialByIdQuery(materialId);

  return (
    <MaterialModalContainer>
      <MaterialModalTitle>Редактировать материал</MaterialModalTitle>

      {material && (
        <MaterialModalFieldsContainer>
          <MaterialModalFieldsName>
            <b>Название:</b> {material.title}
          </MaterialModalFieldsName>
          <MaterialModalFieldsName>
            <b>Ссылка:</b> {material.link}
          </MaterialModalFieldsName>
        </MaterialModalFieldsContainer>
      )}

      <MaterialModalButtonsBox>
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
      </MaterialModalButtonsBox>
    </MaterialModalContainer>
  );
};

EditMaterialModal.propTypes = {
  materialId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditMaterialModal;
