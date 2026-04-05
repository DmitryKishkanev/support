import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container } from 'components/HooksColorPicker/HooksColorPicker.styled';

function HooksColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      active: index === activeOptionIdx,
    });
  };

  return (
    <Container>
      <h2 className="ColorPicker__title">Выбор цвета</h2>
      <p>Выбран цвет: {label}</p>

      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </Container>
  );
}

HooksColorPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

//memo — это функция-обёртка для компонентов, которая предотвращает их повторный рендер, если пропсы не изменились.
export default memo(HooksColorPicker);
