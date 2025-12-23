import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@/redux/user/slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
