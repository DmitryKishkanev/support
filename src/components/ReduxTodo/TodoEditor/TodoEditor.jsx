import { useState } from 'react';
import PropTypes from 'prop-types';
import { TodoEditorForm } from 'components/ReduxTodo/TodoEditor/TodoEditor.styled';

const TodoEditor = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSabmit = e => {
    e.preventDefault();

    onSubmit(message);
    setMessage('');
  };

  return (
    <TodoEditorForm onSubmit={handleSabmit}>
      <textarea value={message} onChange={handleChange}></textarea>
      <button type="submit" className="todoEditor__button">
        Добавить
      </button>
      <button type="button" className="todoEditor__button">
        Закрыть
      </button>
    </TodoEditorForm>
  );
};

TodoEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoEditor;
