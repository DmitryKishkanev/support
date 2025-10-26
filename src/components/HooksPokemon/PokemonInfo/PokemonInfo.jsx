import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PokemonErrorView from 'components/HooksPokemon/PokemonErrorView';
import PokemonDataView from 'components/HooksPokemon/PokemonDataView';
import PokemonPendingView from 'components/HooksPokemon/PokemonPendingView';
import pokemonAPI from 'components/HooksPokemon/Services/pokemon-api';

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

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        // Порядок setState-ов - важен. Сначала кладём данные, потом статус.
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
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
