import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userSlice } from '@/redux/user/slice';
import { reduxPhonebookSlice } from '@/redux/reduxPhonebook/slice';
import { reduxTodoSlice } from '@/redux/reduxTodo/slice';
import pokemonReducer from '@/redux/ReduxPokemon/pokemonReducer';

// Store для user без persist
// export const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });

const userPersistConfig = { key: 'user', storage };
const persistUserReducer = persistReducer(userPersistConfig, userSlice.reducer);

const reduxPhonebookPersistConfig = { key: 'reduxPhonebook', storage };
const persistReduxPhonebookReducer = persistReducer(
  reduxPhonebookPersistConfig,
  reduxPhonebookSlice.reducer,
);

const reduxTodoPersistConfig = { key: 'reduxTodo', storage };
const persistReduxTodoReducer = persistReducer(
  reduxTodoPersistConfig,
  reduxTodoSlice.reducer,
);

// const reduxPokemonConfig = { key: 'reduxPokemon', storage };
// const persistReduxPokemonReducer = persistReducer(
//   reduxPokemonConfig,
//   reduxPokemonSlice.reducer,
// );

export const store = configureStore({
  reducer: {
    user: persistUserReducer,
    reduxPhonebook: persistReduxPhonebookReducer,
    reduxTodo: persistReduxTodoReducer,
    ReduxPokemon: pokemonReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
