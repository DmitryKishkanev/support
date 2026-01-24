import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/ReduxPokemon/PokemonForm';
import PokemonInfo from 'components/ReduxPokemon/PokemonInfo';
import { PokemonInfoContainer } from 'components/ReduxPokemon/ReduxPokemon/ReduxPokemon.styled';

export default function ReduxPokemon() {
  return (
    <PokemonInfoContainer>
      <h1>Pokemon info</h1>
      <PokemonForm />
      <PokemonInfo />
      <ToastContainer autoClose={3000} theme={'colored'} />
    </PokemonInfoContainer>
  );
}
