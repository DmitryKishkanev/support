import PropTypes from 'prop-types';
import IconButton from 'components/Todo/IconButton';
import DeleteIcon from '@/icons/delete.svg?react';
import { TodoCheckbox, TodoText } from 'components/Todo/Todo/Todo.styled';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <TodoCheckbox
      type="checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <TodoText completed={completed}>{text}</TodoText>
    <IconButton onClick={onDelete} aria-label="Удалить todo">
      <DeleteIcon width="32" height="32" fill="red" />
    </IconButton>
  </>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Todo;
