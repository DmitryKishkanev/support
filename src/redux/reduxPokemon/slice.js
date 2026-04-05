import { createSlice } from '@reduxjs/toolkit';
import { pokemonInitialState } from './initialState';
import { fetchPokemonRedux } from './pokemonOperations';

export const reduxPokemonSlice = createSlice({
  name: 'reduxPokemon',
  initialState: pokemonInitialState,
  reducers: {
    resetReduxPokemon: () => pokemonInitialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonRedux.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonRedux.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemonRedux.rejected, (state, action) => {
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

export const { resetReduxPokemon } = reduxPokemonSlice.actions;
