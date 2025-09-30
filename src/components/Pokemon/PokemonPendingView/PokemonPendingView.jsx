// import { ImSpinner } from 'react-icons/im';
import { StyledSpinner } from 'components/Pokemon/PokemonPendingView/PokemonPendingView.styled';
import PokemonDataView from 'components/Pokemon/PokemonDataView';
import pendingImage from '@/assets/error.jpg';

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
      <div>
        <StyledSpinner size="32" />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
