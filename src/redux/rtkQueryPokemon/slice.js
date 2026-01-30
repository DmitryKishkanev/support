import { createSlice } from '@reduxjs/toolkit';
import { pokemonInitialState } from './initialState';
import { fetchPokemon } from './pokemonOperations';

export const rtkQueryPokemonSlice = createSlice({
  name: 'rtkQueryPokemon',
  initialState: pokemonInitialState,
  reducers: {
    resetPokemon: () => pokemonInitialState,
  },
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
        // Обработка ошибки при прерывании http - запроса
        if (action.error.name === 'AbortError') {
          console.log('Запрос был отменён');
        } else {
          state.error = action.payload;
        }
      });
  },
});

export const { resetPokemon } = rtkQueryPokemonSlice.actions;
