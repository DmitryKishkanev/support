import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PokemonErrorView from 'components/ReduxPokemon/PokemonErrorView';
import PokemonDataView from 'components/ReduxPokemon/PokemonDataView';
import PokemonPendingView from 'components/ReduxPokemon/PokemonPendingView';
import pokemonAPI from 'components/ReduxPokemon/Services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'panding',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    // Игнор первого рендера (pokemonName - пустая строка)
    if (!pokemonName) {
      return;
    }
    setStatus(Status.PENDING);

    // Создаём контроллер для текущего запроса
    const controller = new AbortController();

    pokemonAPI
      .fetchPokemon(pokemonName, controller.signal)
      .then(pokemon => {
        // Порядок setState-ов - важен. Сначала кладём данные, потом статус.
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          // Запрос отменён — просто игнорируем
          return;
        }
        setError(error);
        setStatus(Status.REJECTED);
      });

    // Сleanup-функция: отмена запроса при размонтировании или смене pokemonName
    return () => {
      controller.abort();
      console.log(
        'HooksPokemon: Отмена запроса при размонтировании или смене pokemonName',
      );
    };
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Введите имя покемона</div>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

PokemonInfo.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
