import { Component } from 'react';
import PropTypes from 'prop-types';

import { TodoEditorForm } from 'components/Todo/TodoEditor/TodoEditor.styled';

class TodoEditor extends Component {
  state = { message: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSabmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <TodoEditorForm onSubmit={this.handleSabmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="todoEditor__button">
          Добавить
        </button>
      </TodoEditorForm>
    );
  }
}

export default TodoEditor;
