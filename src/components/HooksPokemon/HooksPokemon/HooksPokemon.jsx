import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/HooksPokemon/PokemonForm';
import PokemonInfo from 'components/HooksPokemon/PokemonInfo';
import { PokemonInfoContainer } from 'components/HooksPokemon/HooksPokemon/HooksPokemon.styled';

export default function HooksPokemon() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <PokemonInfoContainer>
      <h1>Pokemon info</h1>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} theme={'colored'} />
    </PokemonInfoContainer>
  );
}
