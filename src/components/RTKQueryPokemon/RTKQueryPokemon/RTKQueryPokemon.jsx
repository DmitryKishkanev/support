import { ToastContainer } from 'react-toastify';
import PokemonForm from 'components/RTKQueryPokemon/PokemonForm';
import { PokemonInfoContainer } from '@/components/RTKQueryPokemon/RTKQueryPokemon/RTKQueryPokemon.styled';

export default function RTKQueryPokemon() {
  return (
    <PokemonInfoContainer>
      <h1>Pokemon info</h1>
      <PokemonForm />
      <ToastContainer autoClose={3000} theme={'colored'} />
    </PokemonInfoContainer>
  );
}
