import * as pokemonActions from '@/redux/ReduxPokemon/pokemonActions';
import pokemonAPI from 'components/ReduxPokemon/Services/pokemon-api';

export const fetchPokemon = pokemonName => async dispatch => {
  dispatch(pokemonActions.fetchPokemonRequest());

  // если без async/await fetch().then().catch();

  try {
    const pokemon = await pokemonAPI.fetchPokemon(
      pokemonName,
      controller.signal,
    );
    dispatch(pokemonActions.fetchPokemonSuccess());
  } catch (error) {
    dispatch(pokemonActions.fetchPokemonError(error.message));
  }
};
