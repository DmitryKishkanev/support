import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetReduxPokemon } from '@/redux/reduxPokemon/slice';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { PokemonFormBox } from 'components/ReduxPokemon/PokemonForm/PokemonForm.styled';
import { fetchPokemonRedux } from '@/redux/reduxPokemon/pokemonOperations';

export default function PokemonForm({ onSearch }) {
  const dispatch = useDispatch();
  const promiseRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.pokemonName.value
      .trim()
      .toLowerCase();

    if (name === '') {
      toast.warn('Введите имя покемона');
      return;
    }

    promiseRef.current = dispatch(fetchPokemonRedux(name));

    onSearch(name);

    event.currentTarget.reset();
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
        <input type="text" name="pokemonName" />
      </label>

      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Найти
      </button>
    </PokemonFormBox>
  );
}
