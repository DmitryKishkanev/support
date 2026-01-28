import { useSelector } from 'react-redux';
import {
  selectPokemon,
  selectIsLoading,
  selectError,
} from '@/redux/reduxPokemonOn/selectors';
import PokemonErrorView from 'components/ReduxPokemon/PokemonErrorView';
import PokemonDataView from 'components/ReduxPokemon/PokemonDataView';
import PokemonPendingView from 'components/ReduxPokemon/PokemonPendingView';

export default function PokemonInfo() {
  const pokemon = useSelector(selectPokemon);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (!pokemon) {
    return <div>Введите имя покемона</div>;
  }

  if (isLoading) {
    return <PokemonPendingView pokemonName={pokemon.name} />;
  }

  if (error) {
    return <PokemonErrorView message={error} />;
  }

  if (pokemon) {
    return <PokemonDataView pokemon={pokemon} />;
  }

  return null;
}
