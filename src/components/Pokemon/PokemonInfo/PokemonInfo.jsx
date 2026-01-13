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

  // Будем хранить контроллер как свойство экземпляра
  controller = null;

  static propTypes = {
    pokemonName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      // Отменяем предыдущий запрос, если он ещё идёт
      if (this.controller) {
        this.controller.abort();
        console.log('Pokemon: Сменился запрос');
      }

      // Создаём новый контроллер для свежего запроса
      this.controller = new AbortController();

      this.setState({ status: 'pending', error: null, pokemon: null });

      pokemonAPI
        .fetchPokemon(nextName, this.controller.signal) //Передаём signal
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => {
          if (error.name === 'AbortError') {
            // Запрос отменён — просто игнорируем
            return;
          }
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  componentWillUnmount() {
    // При размонтировании отменяем текущий запрос
    if (this.controller) {
      this.controller.abort();
      console.log('Pokemon: Компонент размонтирован, запрос прерван');
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
