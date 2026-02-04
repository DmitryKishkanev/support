import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
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
import { reduxPokemonSlice } from '@/redux/reduxPokemon/slice';
import { asyncReduxPhonebookSlice } from '@/redux/asyncReduxPhonebook';
import { asyncReduxPhonebookFilterSlice } from '@/redux/asyncReduxPhonebook';
import { pokemonApi } from '@/redux/rtkQueryPokemon';
import { phonebookApi } from '@/redux/rtkQueryPhonebook';

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

export const store = configureStore({
  reducer: {
    user: persistUserReducer,
    reduxPhonebook: persistReduxPhonebookReducer,
    reduxTodo: persistReduxTodoReducer,
    // reduxPokemon: persistReduxPokemonReducer,
    reduxPokemon: reduxPokemonSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    asyncReduxPhonebook: persistAsyncReduxPhonebookReducer,
    asyncReduxPhonebookFilter: asyncReduxPhonebookFilterSlice.reducer,
  },
  //Middleware в Redux — это промежуточное программное обеспечение (прослойка), расположенное между отправкой действия (dispatch) и редьюсером (reducer).
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    pokemonApi.middleware,
    phonebookApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

// Пример кастомного middleware
// const customMiddle = state => {
//   return next => {
//     return action => {
//       if (typeof action === 'function') {
//         return next(action(state.dispatch));
//       }
//       return next(action);
//     };
//   };
// };

// const persistReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistReducer,
//   middleware: [customMiddle],
// });

// export const persistor = persistStore(store);
