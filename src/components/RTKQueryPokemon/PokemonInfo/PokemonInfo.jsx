import { useGetPokemonByNameQuery } from '@/redux/rtkQueryPokemon';
import PokemonErrorView from 'components/RTKQueryPokemon/PokemonErrorView';
import PokemonDataView from 'components/RTKQueryPokemon/PokemonDataView';
import PokemonPendingView from 'components/RTKQueryPokemon/PokemonPendingView';

export default function PokemonInfo({ pokemonName }) {
  const { data, error, isFetching } = useGetPokemonByNameQuery(pokemonName, {
    skip: pokemonName === '',
    // fetch - запрос автоматически каждые 3 сек.
    // pollingInterval: 3000,

    // fetch - запрос автоматически при возвращении фокуса на страницу.
    // refetchOnFocus: true,

    // fetch - запрос автоматически при востановлении интерент-связи после разрыва.
    // refetchOnReconnect: true,
  });

  // if (!data) {
  //   return <div>Введите имя покемона</div>;
  // }

  if (error) {
    return <PokemonErrorView message={error.data} pokemonName={pokemonName} />;
  }

  if (isFetching) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (data) {
    return <PokemonDataView pokemon={data} />;
  }

  return null;
}
