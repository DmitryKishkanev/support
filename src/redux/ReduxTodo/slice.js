import { createSlice } from '@reduxjs/toolkit';
import { reduxTodoInitialState } from '@/redux/ReduxTodo/initialState';

export const reduxTodoSloce = createSlice({
  name: 'reduxTodo',
  initialState: reduxTodoInitialState,
  reducers: {
    addTodo,
    deleteTodo,
    setFilter,
  },
});
