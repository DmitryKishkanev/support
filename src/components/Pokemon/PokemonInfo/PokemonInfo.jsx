import { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonErrorView from 'components/Pokemon/PokemonErrorView';
import PokemonDataView from 'components/Pokemon/PokemonDataView';
import PokemonPendingView from 'components/Pokemon/PokemonPendingView';
import pokemonAPI from 'components/Pokemon/Services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  static propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Введите имя покемона</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;
