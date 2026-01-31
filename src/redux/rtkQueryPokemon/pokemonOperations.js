import { createAsyncThunk } from '@reduxjs/toolkit';
import pokemonAPI from '@/components/RTKQueryPokemon/Services/pokemon-api';

export const fetchPokemonRtk = createAsyncThunk(
  'rtkQueryPokemon/fetchPokemon',
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

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'rtkQueryPokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: build => ({
    getPokemonByName: build.query({
      query: name => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
