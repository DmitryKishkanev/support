import { createAction } from '@reduxjs/toolkit';

// pending
export const fetchPokemonRequest = createAction('pokemon/fetchPokemonRequest');

// fulfilled
export const fetchPokemonSuccess = createAction('pokemon/fetchPokemonSuccess');

// rejected
export const fetchPokemonError = createAction('pokemon/fetchPokemonError');
