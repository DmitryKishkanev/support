import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { PokemonFormBox } from 'components/Pokemon/PokemonForm/PokemonForm.styled';

class PokemonForm extends Component {
  state = { pokemonName: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <PokemonFormBox onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
        </label>

        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </PokemonFormBox>
    );
  }
}

export default PokemonForm;
