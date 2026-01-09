import { Component } from 'react';
import shortid from 'shortid';
import initialTodos from '@/todos.json';
import TodoList from 'components/Todo/TodoList';
import IconButton from 'components/Todo/IconButton';
import AddIcon from '@/icons/add.svg?react';
import TodoFilter from 'components/Todo/TodoFilter';
import TodoEditor from 'components/Todo/TodoEditor';
import Modal from 'components/Modal/Modal';

export default class ReduxTodoComponent extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
  }

  addTodo = todoText => {
    const todo = {
      id: shortid.generate(),
      text: todoText,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  //   toggleModal = (content = null) => {
  //     this.setState(prev => ({
  //       showModal: !prev.showModal,
  //       modalContent: content,
  //     }));
  //   };

  render() {
    const { filter, showModal } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <>
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        >
          <IconButton
            type="button"
            onClick={() => this.toggleModal('todo')}
            aria-label="Добавить todo"
          >
            <AddIcon width="32" height="32" fill="white" />
          </IconButton>

          <TodoFilter value={filter} onChangeFilter={this.changeFilter} />
        </TodoList>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <>
              <TodoEditor onSubmit={this.addTodo} onClose={this.toggleModal} />
              <button
                type="button"
                className="Close__btn"
                onClick={this.toggleModal}
              >
                Close
              </button>
            </>
          </Modal>
        )}
      </>
    );
  }
}
