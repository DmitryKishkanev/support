import PropTypes from 'prop-types';

const Controls = ({ currentItem, totalItems, onChangr }) => {
  return (
    <section>
      <button
        type="bytton"
        disabled={currentItem === 1}
        onClick={() => onChangr(-1)}
      >
        Назад
      </button>
      <button
        type="bytton"
        disabled={currentItem === totalItems}
        onClick={() => onChangr(1)}
      >
        Вперёд
      </button>
    </section>
  );
};

Controls.propTypes = {
  currentItem: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onChangr: PropTypes.func.isRequired,
};

export default Controls;
