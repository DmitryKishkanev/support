import { createSlice } from '@reduxjs/toolkit';
import { pokemonInitialState } from './initialState';
import { fetchPokemon } from './pokemonOperations';

export const reduxPokemonSlice = createSlice({
  name: 'reduxPokemon',
  initialState: pokemonInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPokemon.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
