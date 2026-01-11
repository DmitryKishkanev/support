import classNames from 'classnames';
import PropTypes from 'prop-types';
import Todo from 'components/ReduxTodo/Todo';
import {
  Container,
  TodoListBox,
  TodoItem,
} from '@/components/Todo/TodoList/TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, children }) => {
  // const [TodoFilter, TodoEditor] = React.Children.toArray(children);

  const totalTodoCount = todos.length;
  const completedTodosCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0,
  );

  return (
    <Container>
      <h2>Заметки</h2>
      <p>Общее кол-во: {totalTodoCount}</p>
      <p>Кол-во выполненных: {completedTodosCount}</p>
      {children}
      <TodoListBox>
        {todos.map(({ id, text, completed }) => (
          <TodoItem
            key={id}
            className={classNames({
              completed: completed,
            })}
          >
            <Todo
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
            />
          </TodoItem>
        ))}
      </TodoListBox>
    </Container>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default TodoList;
