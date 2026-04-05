import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from '@/components/ReduxPokemon/Services/pokemon-api';

export const fetchPokemonRedux = createAsyncThunk(
  'reduxPokemon/fetchPokemon',
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
