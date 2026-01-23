import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { PokemonFormBox } from 'components/ReduxPokemon/PokemonForm/PokemonForm.styled';
import { fetchPokemon } from '@/redux/ReduxPokemon/pokemonOperations';

export default function PokemonForm() {
  const [pokemonName, setPokemonName] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }
    // onSubmit(pokemonName);
    const promise = dispatch(fetchPokemon(pokemonName));
    setPokemonName('');

    return () => {
      promise.abort();
      console.log(
        'HooksPokemon: Отмена запроса при размонтировании или смене pokemonName',
      );
    };
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

// PokemonForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
