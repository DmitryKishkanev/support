import PropTypes from 'prop-types';
import {
  SpinnerBox,
  StyledSpinner,
} from 'components/RTKQueryPokemon/PokemonPendingView/PokemonPendingView.styled';
import PokemonDataView from 'components/RTKQueryPokemon/PokemonDataView';
import pendingImage from '@/assets/loaded.jpg';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div>
      <SpinnerBox>
        <StyledSpinner size="32" />
        Загружаем...
      </SpinnerBox>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

PokemonPendingView.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
