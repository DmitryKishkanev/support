import { Component } from 'react';
import SignupForm from 'components/UseLocalStorage/UseLocalStorage';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import colorPickerOptions from '@/colorPickerOptions.json';
import TodoList from 'components/TodoList';
import initialTodos from '@/todos.json';
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

  render() {
    const { todos } = this.state;

    return (
      <div className={style.app}>
        <SignupForm />
        <Counter />
        <Counter initialValue={10} />

        <Dropdown />

        <ColorPicker options={colorPickerOptions} />

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
