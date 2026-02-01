import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import PokemonInfo from 'components/RTKQueryPokemon/PokemonInfo';
import { PokemonFormBox } from 'components/RTKQueryPokemon/PokemonForm/PokemonForm.styled';

export default function PokemonForm() {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.pokemonName.value.toLowerCase();

    if (name.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }

    setPokemonName(name);
    event.currentTarget.reset();
  };

  return (
    <>
      <PokemonFormBox onSubmit={handleSubmit}>
        <label>
          <input type="text" name="pokemonName" />
        </label>

        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </PokemonFormBox>

      <PokemonInfo pokemonName={pokemonName} />
    </>
  );
}
