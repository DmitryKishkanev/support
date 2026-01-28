import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from 'components/reduxPokemon/Services/pokemon-api';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchAll',
  // если без async/await - fetch().then().catch();
  async (pokemonName, thunkAPI) => {
    try {
      // Для проверки прерывания http - запроса, при размонтировании компонента
      // await new Promise(resolve => setTimeout(resolve, 2000));

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
