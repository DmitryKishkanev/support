import { createSlice } from '@reduxjs/toolkit';
import { reduxTodoInitialState } from '@/redux/reduxTodo/initialState';

export const reduxTodoSlice = createSlice({
  name: 'reduxTodo',
  initialState: reduxTodoInitialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, setFilter, setShowModal } =
  reduxTodoSlice.actions;
