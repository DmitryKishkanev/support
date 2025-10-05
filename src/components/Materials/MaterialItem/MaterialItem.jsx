import { Component } from 'react';

export const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
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
    </div>
  );
};

class MaterialItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

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
          onClick={this.openModal}
          // onClick={() => onUpdate({ id: item.id, title: Date.now() })}
        >
          Редактировать
        </button>
        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}

export default MaterialItem;
