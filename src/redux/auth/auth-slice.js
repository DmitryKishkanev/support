import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, actions) {},
  },
});
