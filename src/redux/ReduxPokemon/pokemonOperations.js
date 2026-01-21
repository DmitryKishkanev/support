// import * as pokemonActions from '@/redux/ReduxPokemon/pokemonActions';
// import pokemonAPI from 'components/ReduxPokemon/Services/pokemon-api';

// export const fetchPokemon = pokemonName => async dispatch => {
//   dispatch(pokemonActions.fetchPokemonRequest());

//   // если без async/await fetch().then().catch();

//   try {
//     const pokemon = await pokemonAPI.fetchPokemon(
//       pokemonName,
//       controller.signal,
//     );
//     dispatch(pokemonActions.fetchPokemonSuccess());
//   } catch (error) {
//     dispatch(pokemonActions.fetchPokemonError(error.message));
//   }
// };

import {
  fetchPokemonRequest,
  fetchPokemonSuccess,
  fetchPokemonError,
} from './slice';
import pokemonAPI from 'components/ReduxPokemon/Services/pokemon-api';

export const fetchPokemon = (pokemonName, signal) => async dispatch => {
  // если без async/await fetch().then().catch();

  try {
    dispatch(fetchPokemonRequest());
    const pokemon = await pokemonAPI.fetchPokemon(pokemonName, signal);
    dispatch(fetchPokemonSuccess(pokemon));
  } catch (error) {
    // dispatch(fetchPokemonError(error.message));
    dispatch(fetchPokemonError(error.message));
  }
};
