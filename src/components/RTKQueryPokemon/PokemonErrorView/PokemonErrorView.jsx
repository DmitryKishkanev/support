import PropTypes from 'prop-types';
import errorImage from '@/assets/no-image.jpg';
import { ErrorMessage } from 'components/RTKQueryPokemon/PokemonErrorView/PokemonErrorView.styled';

export default function PokemonErrorView({ message, pokemonName }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="errorsign" width="240" />

      <ErrorMessage>
        {message}
        <br />
        Нет покемона с именем: {pokemonName}
      </ErrorMessage>
    </div>
  );
}

PokemonErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
