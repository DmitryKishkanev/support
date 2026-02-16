import PropTypes from 'prop-types';
import { MaterialModalContainer } from 'components/RTKQueryMaterials/EditMaterialModal/EditMaterialModal.styled';
import { useFetchMaterialByIdQuery } from '@/redux/rtkQueryMaterials';

const EditMaterialModal = ({ materialId, onClose, onEdit }) => {
  // При запросе fetchMaterialById –  id передаём в сам хук
  const { data: material } = useFetchMaterialByIdQuery(materialId);

  return (
    <MaterialModalContainer>
      <h2>Редактировать материал</h2>

      {material && (
        <div>
          <p>
            <b>Название:</b> {material.title}
          </p>
          <p>
            <b>Ссылка:</b> {material.link}
          </p>
        </div>
      )}

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
  materialId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditMaterialModal;
