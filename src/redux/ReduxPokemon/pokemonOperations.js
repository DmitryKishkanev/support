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

import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from 'components/ReduxPokemon/Services/pokemon-api';

// export const fetchPokemon = (pokemonName, signal) => async dispatch => {
//   // если без async/await fetch().then().catch();

//   try {
//     dispatch(fetchPokemonRequest());
//     const pokemon = await pokemonAPI.fetchPokemon(pokemonName, signal);
//     dispatch(fetchPokemonSuccess(pokemon));
//   } catch (error) {
//     // dispatch(fetchPokemonError(error.message));
//     dispatch(fetchPokemonError(error.message));
//   }
// };

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchAll',
  // если без async/await - fetch().then().catch();
  async (pokemonName, thunkAPI) => {
    try {
      const pokemon = await pokemonAPI.fetchPokemon(
        pokemonName,
        thunkAPI.signal,
      );
      return pokemon;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
