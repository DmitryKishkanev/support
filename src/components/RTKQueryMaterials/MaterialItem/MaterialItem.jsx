import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import EditMaterialModal from 'components/RTKQueryMaterials/EditMaterialModal';
import { MaterialItemContainer } from 'components/RTKQueryMaterials/MaterialItem/MaterialItem.styled';
import {
  useUpdateMaterialMutation,
  useDeleteMaterialMutation,
} from '@/redux/rtkQueryMaterials';

const MaterialItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteMaterial, { isLoading: isDeleting }] =
    useDeleteMaterialMutation();
  const [updateMaterial] = useUpdateMaterialMutation();

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <MaterialItemContainer>
      <p>
        <b>Название:</b> {item.title}
      </p>
      <p>
        <b>Ссылка:</b> {item.link}
      </p>
      <button
        type="button"
        disabled={isDeleting}
        // onClick={() => handleDeleteMaterial(item.id)}
        onClick={() => deleteMaterial(item.id)}
      >
        {isDeleting && '🗑'} Удалить
      </button>

      <button
        type="button"
        onClick={toggleModal}
        // onClick={() => onUpdate({ id: item.id, title: Date.now() })}
      >
        Редактировать
      </button>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <EditMaterialModal
            materialId={item.id}
            onClose={toggleModal}
            onEdit={() =>
              updateMaterial({
                materialId: item.id,
                title: new Date(Date.now()).toLocaleDateString(),
              })
            }
          />
        </Modal>
      )}
    </MaterialItemContainer>
  );
};

MaterialItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export default MaterialItem;
