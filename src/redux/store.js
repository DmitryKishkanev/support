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
// import pokemonReducer from '@/redux/ReduxPokemon/pokemonReducer';
import { reduxPokemonSlice } from './reduxPokemon/slice';
import { asyncReduxPhonebookSlice } from './asyncReduxPhonebook/contactsSlice';
import { asyncReduxPhonebookFilterSlice } from './asyncReduxPhonebook/filterSlice';

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

// const reduxPokemonConfig = {
//   key: 'reduxPokemon',
//   storage,
//   blacklist: ['isLoading', 'error'],
// };
// const persistReduxPokemonReducer = persistReducer(
//   reduxPokemonConfig,
//   reduxPokemonSlice.reducer,
// );

const asyncReduxPhonebookPersistConfig = {
  key: 'asyncReduxPhonebook',
  storage,
};
const persistAsyncReduxPhonebookReducer = persistReducer(
  asyncReduxPhonebookPersistConfig,
  asyncReduxPhonebookSlice.reducer,
);

const asyncReduxPhonebookFilterPersistConfig = {
  key: 'asyncReduxPhonebookFilter',
  storage,
};
const persistAsyncReduxPhonebookFilterReducer = persistReducer(
  asyncReduxPhonebookFilterPersistConfig,
  asyncReduxPhonebookFilterSlice.reducer,
);

export const store = configureStore({
  reducer: {
    user: persistUserReducer,
    reduxPhonebook: persistReduxPhonebookReducer,
    reduxTodo: persistReduxTodoReducer,
    // reduxPokemon: persistReduxPokemonReducer,
    reduxPokemon: reduxPokemonSlice.reducer,
    asyncReduxPhonebook: persistAsyncReduxPhonebookReducer,
    asyncReduxPhonebookFilter: persistAsyncReduxPhonebookFilterReducer,
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
