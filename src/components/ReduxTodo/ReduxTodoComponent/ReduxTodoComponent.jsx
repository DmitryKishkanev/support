// import { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  toggleModal,
  toggleCompleted,
} from '@/redux/reduxTodoTemp/slice';
import TodoList from 'components/ReduxTodo/TodoList';
import IconButton from 'components/ReduxTodo/IconButton';
import AddIcon from '@/icons/add.svg?react';
import TodoFilter from 'components/ReduxTodo/TodoFilter';
import TodoEditor from 'components/ReduxTodo/TodoEditor';
import Modal from 'components/Modal/Modal';

const ReduxTodoComponent = () => {
  const { todos, filter, showModal } = useSelector(state => state.reduxTodo);
  const dispatch = useDispatch();

  const getFilteredTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  const filteredTodos = getFilteredTodos();

  return (
    <>
      <TodoList
        todos={filteredTodos}
        onDeleteTodo={id => dispatch(deleteTodo(id))}
        onToggleCompleted={id => dispatch(toggleCompleted(id))}
      >
        <IconButton
          type="button"
          onClick={() => dispatch(toggleModal('todo'))}
          aria-label="Добавить todo"
        >
          <AddIcon width="32" height="32" fill="white" />
        </IconButton>

        <TodoFilter />
      </TodoList>

      {showModal && (
        <Modal onClose={() => dispatch(toggleModal())}>
          <>
            <TodoEditor
              onSubmit={text => {
                dispatch(addTodo(text));
                dispatch(toggleModal());
              }}
            />
            <button
              type="button"
              className="Close__btn"
              onClick={() => dispatch(toggleModal())}
            >
              Close
            </button>
          </>
        </Modal>
      )}
    </>
  );
};

export default ReduxTodoComponent;
