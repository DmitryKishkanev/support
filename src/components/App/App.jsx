import { Component } from 'react';
import shortid from 'shortid';
import SignupForm from 'components/UseLocalStorage/UseLocalStorage';
import Counter from 'components/Counter';
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
import PhonebookList from 'components/Phonebook/PhonebookList';
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

    contacts: [],
  };

  addTodo = todoText => {
    const todo = {
      id: shortid.generate(),
      text: todoText,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
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

  addContact = contactText => {
    const contact = {
      id: shortid.generate(),
      text: contactText,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    const { todos } = this.state;

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
          <TodoEditor onSubmit={this.addTodo} />
          <TodoFilter
            value={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
        </TodoList>

        <CafeFeedbackComponent />

        <PhonebookList contacts={this.state.contacts}>
          <PhonebookEditor onSubmit={this.addContact} />
        </PhonebookList>
      </div>
    );
  }
}

export default App;
