import React, { Component } from 'react';
import shortid from 'shortid';
import PhonebookList from 'components/Phonebook/PhonebookList';

class PhonebookEditor extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,}(?:[ '-][a-zA-Zа-яА-ЯёЁ]+)*$/u;
    const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;

    const name = this.state.name.trim();
    const number = this.state.number.trim();

    // Валидация имени
    if (!nameRegex.test(name)) {
      alert('Имя может содержать только буквы, пробелы, апостроф и дефис.');
      return;
    }

    // Валидация номера
    if (!phoneRegex.test(number)) {
      alert(
        'Номер телефона должен содержать только цифры, пробелы, скобки, дефисы и может начинаться с +.',
      );
      return;
    }

    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
      name: '',
      number: '',
    }));
  };

  // handleSabmit = e => {
  //   e.preventDefault();

  //   this.props.onSubmit(this.state.name);
  //   this.setState({ name: '' });
  // };

  // addContact = contactText => {
  //   const contact = {
  //     id: shortid.generate(),
  //     text: contactText,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   }));
  // };

  render() {
    return (
      <PhonebookList contacts={this.state.contacts}>
        <form onSubmit={this.addContact}>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            required
          />

          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            required
          />

          <button type="submit" className="phonebook__button">
            Добавить
          </button>
        </form>
      </PhonebookList>
    );
  }
}

export default PhonebookEditor;
