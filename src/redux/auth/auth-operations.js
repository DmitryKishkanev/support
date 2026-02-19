// import axios from 'axios';
import { apiConnections } from './apiConnections';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await apiConnections.post('/users/signup', credentials);
    return data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await apiConnections.post('/users/login', credentials);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await apiConnections.post('/users/logout', credentials);
    return data;
  } catch (error) {}
});
