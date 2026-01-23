// export const getPokemon = state => state.reduxPokemon;
export const selectPokemon = state => state.reduxPokemon.pokemon;
export const selectIsLoading = state => state.reduxPokemon.getIsLoading;
export const selectError = state => state.reduxPokemon.error;
