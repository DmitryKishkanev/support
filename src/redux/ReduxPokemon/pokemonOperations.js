import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from 'components/reduxPokemon/Services/pokemon-api';

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
