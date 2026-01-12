import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { reduxTodoInitialState } from '@/redux/reduxTodo/initialState';

export const reduxTodoSlice = createSlice({
  name: 'reduxTodo',
  initialState: reduxTodoInitialState,
  reducers: {
    addTodo: (state, action) => {
      //unshift() - добаля todo в начало списка
      state.todos.unshift({
        id: shortid.generate(),
        text: action.payload,
        completed: false,
      });
    },

    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    toggleModal: state => {
      state.showModal = !state.showModal;
    },

    toggleCompleted: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, setFilter, toggleModal, toggleCompleted } =
  reduxTodoSlice.actions;
