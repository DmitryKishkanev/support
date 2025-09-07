import React, { Component } from 'react';

class PhonebookEditor extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSabmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSabmit}>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          name="name"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </form>
    );
  }
}

export default PhonebookEditor;
