import {
  SpinnerBox,
  StyledSpinner,
} from 'components/Pokemon/PokemonPendingView/PokemonPendingView.styled';
import PokemonDataView from 'components/Pokemon/PokemonDataView';
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
