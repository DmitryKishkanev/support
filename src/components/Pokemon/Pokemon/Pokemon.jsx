import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/Pokemon/PokemonForm';
import PokemonInfo from 'components/Pokemon/PokemonInfo';

class Pokemon extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <h1>Pokemon info</h1>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} theme={'colored'} />
      </div>
    );
  }
}

export default Pokemon;
