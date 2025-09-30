import { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonErrorView from 'components/Pokemon/PokemonErrorView';
import PokemonDataView from 'components/Pokemon/PokemonDataView';
import PokemonPendingView from 'components/Pokemon/PokemonPendingView';

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

      // fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     }

      //     return Promise.reject(
      //       new Error(`Нет покемона с именем: ${nextName}`),
      //     );
      //   })
      //   .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
      //   .catch(error => this.setState({ error, status: 'rejected' }));

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }

            return Promise.reject(
              new Error(`Нет покемона с именем: ${nextName}`),
            );
          })
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
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

    // return (
    //   <div>
    //     <h2>Pokemon:</h2>
    //     {error && <h3>{error.message}</h3>}
    //     {loading && <div>Загружаем...</div>}
    //     {!pokemonName && <div>Введите имя покемона</div>}
    //     {pokemon && (
    //       <div>
    //         <p>{pokemon.name}</p>
    //         <img
    //           src={pokemon.sprites.other['official-artwork'].front_default}
    //           alt={pokemon.name}
    //           width="240"
    //         />
    //       </div>
    //     )}
    //   </div>
    // );
  }
}

export default PokemonInfo;
