import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { PokemonFormBox } from 'components/RTKQueryPokemon/PokemonForm/PokemonForm.styled';
import { resetRtkPokemon, fetchPokemonRtk } from '@/redux/rtkQueryPokemon';
import { useGetPokemonByNameQuery } from '@/redux/rtkQueryPokemon';

export default function PokemonForm() {
  const [pokemonName, setPokemonName] = useState('');
  const dispatch = useDispatch();
  const promiseRef = useRef(null);

  const { data, error, isFetching } = useGetPokemonByNameQuery(pokemonName, {
    skip: pokemonName === '',
    // fetch - запрос автоматически каждые 3 сек.
    // pollingInterval: 3000,

    // fetch - запрос автоматически при возвращении фокуса на страницу.
    // refetchOnFocus: true,

    // fetch - запрос автоматически при востановлении интерент-связи после разрыва.
    // refetchOnReconnect: true,
  });

  // const handleNameChange = event => {
  //   setPokemonName(event.currentTarget.value.toLowerCase());
  // };

  const handleSubmit = event => {
    event.preventDefault();

    setPokemonName(
      event.currentTarget.elements.pokemonName.value.toLowerCase(),
    );
    event.currentTarget.reset();

    // if (pokemonName.trim() === '') {
    //   toast.warn('Введите имя покемона');
    //   return;
    // }

    // promiseRef.current = dispatch(fetchPokemonRtk(pokemonName));

    // setPokemonName('');
  };

  // Для прерывания http - запроса, при размонтировании компонента
  useEffect(() => {
    return () => {
      if (promiseRef.current) {
        promiseRef.current.abort();
        console.log(
          'rtkQueryPokemon: Отмена запроса при размонтировании или смене pokemonName',
        );
      }
      dispatch(resetRtkPokemon()); // Сброс состояния при размонтировании компонента
    };
  }, [dispatch]);

  return (
    <PokemonFormBox onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="pokemonName"
          // value={pokemonName}
          // onChange={handleNameChange}
        />
      </label>

      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Найти
      </button>
    </PokemonFormBox>
  );
}
