import PropTypes from 'prop-types';
import errorImage from '@/assets/no-image.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="errorsign" width="240" />
      <p> {message}</p>
    </div>
  );
}

PokemonErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
