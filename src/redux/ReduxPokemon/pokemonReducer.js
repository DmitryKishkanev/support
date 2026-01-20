import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as pokemonActions from './pokemonActions';

const pokemonReducer = createReducer([], {
  [pokemonActions.fetchPokemonSuccess]:
    (state = []) =>
    (state, action) =>
      action.payload,
});

const isLoadingReducer = createReducer(false, {
  [pokemonActions.fetchPokemonRequest]: () => true,
  [pokemonActions.fetchPokemonSuccess]: () => false,
  [pokemonActions.fetchPokemonError]: () => false,
});

const errorReducer = createReducer(null, {
  [pokemonActions.fetchPokemonError]: (state, action) => action.payload,
  [pokemonActions.fetchPokemonRequest]: () => null,
});

export default combineReducers({
  pokemonReducer,
  isLoadingReducer,
  errorReducer,
});
