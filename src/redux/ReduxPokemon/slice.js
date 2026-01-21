import { createSlice } from '@reduxjs/toolkit';
// import * as pokemonActions from './pokemonActions';
import { pokemonInitialState } from './initialState';

// export const reduxPokemonSlice = createSlice({
//   extraReducers: builder => {
//     builder
//       .addCase(
//         pokemonActions.fetchPokemonSuccess,
//         (state = []) =>
//           (state, action) =>
//             action.payload,
//       )
//       .addCase(pokemonActions.fetchPokemonSuccess);
//   },
// });

// export const {} = reduxPokemonSlice.actions;

export const reduxPokemonSlice = createSlice({
  name: 'reduxPokemon',
  initialState: pokemonInitialState,
  reducers: {
    fetchPokemonRequest: state => {
      state.isLoading = true;
    },

    fetchPokemonSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.pokemon = action.payload;
    },

    fetchPokemonError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPokemonRequest, fetchPokemonSuccess, fetchPokemonError } =
  reduxPokemonSlice.actions;
