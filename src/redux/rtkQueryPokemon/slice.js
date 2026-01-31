import { createSlice } from '@reduxjs/toolkit';
import { pokemonInitialState } from './initialState';
import { fetchPokemonRtk } from './pokemonOperations';

export const rtkQueryPokemonSlice = createSlice({
  name: 'rtkQueryPokemon',
  initialState: pokemonInitialState,
  reducers: {
    resetRtkPokemon: () => pokemonInitialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonRtk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonRtk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemonRtk.rejected, (state, action) => {
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

export const { resetRtkPokemon } = rtkQueryPokemonSlice.actions;
