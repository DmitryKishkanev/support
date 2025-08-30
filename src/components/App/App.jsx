import { Component } from 'react';
import SignupForm from 'components/UseLocalStorage/UseLocalStorage';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from '@/colorPickerOptions.json';
import TodoList from 'components/TodoList';
import initialTodos from '@/todos.json';
import UserForm from 'components/UserForm';
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

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    return (
      <div className={style.app}>
        <UserForm onSubmitForm={this.formSubmitHandler} />

        <SignupForm />
        <Counter />
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
