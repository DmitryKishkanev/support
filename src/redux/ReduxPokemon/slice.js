import { createSlice } from '@reduxjs/toolkit';
import * as pokemonActions from './pokemonActions';

export const reduxPokemonSlice = createSlice({
  extraReducers: builder => {
    builder
      .addCase(
        pokemonActions.fetchPokemonSuccess,
        (state = []) =>
          (state, action) =>
            action.payload,
      )
      .addCase(pokemonActions.fetchPokemonSuccess);
  },
});

export const {} = reduxPokemonSlice.actions;
