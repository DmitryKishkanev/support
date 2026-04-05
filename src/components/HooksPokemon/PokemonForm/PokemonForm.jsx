import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { PokemonFormBox } from 'components/HooksPokemon/PokemonForm/PokemonForm.styled';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <PokemonFormBox onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
      </label>

      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Найти
      </button>
    </PokemonFormBox>
  );
}

PokemonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
