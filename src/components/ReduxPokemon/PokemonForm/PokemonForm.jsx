import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetReduxPokemon } from '@/redux/reduxPokemon/slice';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { PokemonFormBox } from 'components/ReduxPokemon/PokemonForm/PokemonForm.styled';
import { fetchPokemonRedux } from '@/redux/reduxPokemon/pokemonOperations';

export default function PokemonForm() {
  const [pokemonName, setPokemonName] = useState('');
  const dispatch = useDispatch();
  const promiseRef = useRef(null);

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.warn('Введите имя покемона');
      return;
    }

    promiseRef.current = dispatch(fetchPokemonRedux(pokemonName));

    setPokemonName('');
  };

  // Для прерывания http - запроса, при размонтировании компонента
  useEffect(() => {
    return () => {
      if (promiseRef.current) {
        promiseRef.current.abort();
        console.log(
          'ReduxPokemon: Отмена запроса при размонтировании или смене pokemonName',
        );
      }
      dispatch(resetReduxPokemon()); // Сброс состояния при размонтировании компонента
    };
  }, [dispatch]);

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
