// import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/ReduxPokemon/PokemonForm';
import PokemonInfo from 'components/ReduxPokemon/PokemonInfo';
import { PokemonInfoContainer } from 'components/ReduxPokemon/ReduxPokemon/ReduxPokemon.styled';

export default function ReduxPokemon() {
  // const [pokemonName, setPokemonName] = useState('');

  return (
    <PokemonInfoContainer>
      <h1>Pokemon info</h1>
      {/* <PokemonForm onSubmit={setPokemonName} /> */}
      <PokemonForm />
      {/* <PokemonInfo pokemonName={pokemonName} /> */}
      <PokemonInfo />
      <ToastContainer autoClose={3000} theme={'colored'} />
    </PokemonInfoContainer>
  );
}
