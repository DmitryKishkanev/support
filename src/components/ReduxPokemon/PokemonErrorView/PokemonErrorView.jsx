import PropTypes from 'prop-types';
import errorImage from '@/assets/no-image.jpg';
import { ErrorMessage } from 'components/ReduxPokemon/PokemonErrorView/PokemonErrorView.styled';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="errorsign" width="240" />
      <ErrorMessage> {message}</ErrorMessage>
    </div>
  );
}

PokemonErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
