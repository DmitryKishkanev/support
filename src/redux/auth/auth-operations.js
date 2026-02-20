import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiConnections, set, unset } from './apiConnections';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await apiConnections.post('/users/signup', credentials);
    // Запись token для всех последующих операций
    set(data.token);
    return data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await apiConnections.post('/users/login', credentials);
    // Запись token для всех последующих операций
    set(data.token);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await apiConnections.post('/users/logout');
    // Очищаем token после logOut
    unset();
  } catch (error) {}
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (__, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    set(persistedToken);
    try {
      const { data } = await apiConnections.get('/users/current');
      return data;
    } catch (error) {}
  },
);
