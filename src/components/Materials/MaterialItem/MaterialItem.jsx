import { Component } from 'react';
import PropTypes from 'prop-types';
import Madal from '@/components/Modal/Modal';
import EditMaterialModal from 'components/Materials/EditMaterialModal';

class MaterialItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
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

  toggleModal = () => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };

  render() {
    const { item, onUpdate, onDelete } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Название:</b> {item.title}
        </p>
        <p>
          <b>Ссылка:</b> {item.link}
        </p>
        <button type="button" onClick={() => onDelete(item.id)}>
          Удалить
        </button>

        <button
          type="button"
          onClick={this.toggleModal}
          // onClick={() => onUpdate({ id: item.id, title: Date.now() })}
        >
          Редактировать
        </button>

        {isModalOpen && (
          <Madal onClose={this.toggleModal}>
            <EditMaterialModal
              onClose={this.toggleModal}
              onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
            />
          </Madal>
        )}
      </div>
    );
  }
}

export default MaterialItem;
