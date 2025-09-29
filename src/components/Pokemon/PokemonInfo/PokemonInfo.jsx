import { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  static propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ loading: true });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        <h2>Pokemon:</h2>
        {loading && <div>Загружаем...</div>}
        {!pokemonName && <div>Введите имя покемона</div>}
        {pokemon && <div>{pokemon.name}</div>}
      </div>
    );
  }
}

export default PokemonInfo;
