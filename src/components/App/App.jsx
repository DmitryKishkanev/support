import { Component } from 'react';
import shortid from 'shortid';
import SignupForm from 'components/UseLocalStorage/UseLocalStorage';
import Counter from '@/components/Counter/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from '@/colorPickerOptions.json';
import TodoList from 'components/Todo/TodoList';
import TodoEditor from 'components/Todo/TodoEditor';
import TodoFilter from 'components/Todo/TodoFilter';
import initialTodos from '@/todos.json';
import UserForm from 'components/UserForm';
import CafeFeedbackComponent from 'components/CafeFeedback/CafeFeedbackComponent';
import PhonebookEditor from 'components/Phonebook/PhonebookEditor';
import LoginForm from 'components/LoginForm/LoginForm';
import ProductReviewForm from 'components/ProductReviewForm';
import Modal from 'components/Modal';
import { OpenBtn } from 'components/Modal/Modal.styled';
import Clock from 'components/Clock';
import initialTabs from '@/tabs.json';
import Tabs from 'components/Tabs';
import IconButton from 'components/Todo/IconButton';
import AddIcon from '@/icons/add.svg?react';
import Example from 'components/Player/Example';
import ReaderComponent from 'components/Reader/ReaderComponent';
import publication from '@/publications.json';
import style from 'components/App/App.module.css';

// export default function App() {
//   return (
//     <div className={style.app}>
//       <SignupForm />
//       <Counter />
//       <Counter initialValue={10} />
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//     </div>
//   );
// }

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
    modalContent: null,
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

  formSubmitHandler = data => {
    console.log(data);
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  toggleModal = (content = null) => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      modalContent: content,
    }));
  };

  render() {
    const { todos, filter, showModal, modalContent } = this.state;

    const filteredTodos = this.getFilteredTodos();

    return (
      <div className={style.app}>
        <UserForm onSubmitForm={this.formSubmitHandler} />

        <SignupForm />
        <Counter />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />

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

        <CafeFeedbackComponent />

        <PhonebookEditor />

        <LoginForm />

        <ProductReviewForm />

        <div className={style.timeFaceContainer}>
          <h1 className={style.timeFaceTitle}>Time face</h1>
          <OpenBtn type="button" onClick={() => this.toggleModal('info')}>
            Open
          </OpenBtn>
        </div>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {modalContent === 'todo' && (
              <>
                <TodoEditor
                  onSubmit={this.addTodo}
                  onClose={this.toggleModal}
                />
                <button
                  type="button"
                  className="Close__btn"
                  onClick={this.toggleModal}
                >
                  Close
                </button>
              </>
            )}
            {modalContent === 'info' && (
              <>
                <h1>Контент модалки</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore omnis rem quam numquam iusto ipsa, laudantium expedita
                  quo fuga! Doloribus ad accusantium atque ullam, accusamus esse
                  ipsam tempore odit soluta nulla dolorum quidem voluptatem et
                  cumque excepturi a incidunt cupiditate suscipit inventore
                  nesciunt facere consectetur repudiandae perferendis!
                  Inventore, deleniti a.
                </p>
                <Clock />
                <button
                  type="button"
                  className="Close__btn"
                  onClick={this.toggleModal}
                >
                  Close
                </button>
              </>
            )}
          </Modal>
        )}

        <Tabs items={initialTabs} />

        <Example />

        <ReaderComponent items={publication} />
      </div>
    );
  }
}

export default App;
