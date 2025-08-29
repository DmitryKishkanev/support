import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'components/UserForm/UserForm.styled';

export default class UserForm extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    surname: '',
    experience: 'junior',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      surname: '',
    });
  };

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <h2 className="form__name">Форма пользователя</h2>

        <div className="form__box">
          <label htmlFor="" className="label">
            <span className="label__name">Имя</span>
            <input
              className="label__field"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="" className="label">
            <span className="label__name">Фамилия</span>
            <input
              className="label__field"
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>

          {/* <button type="submit">Отправить</button> */}
        </div>

        <p className="level">Ваш уровень:</p>

        <div className="form__box">
          <label htmlFor="" className="level__field">
            <span className="level__title">
              <input
                className="level__name"
                type="radio"
                name="experience"
                value="junior"
                onChange={this.handleChange}
                checked={this.state.experience === 'junior'}
              />
              junior
            </span>
          </label>

          <label htmlFor="" className="level__field">
            <span className="level__title">
              <input
                className="level__name"
                type="radio"
                name="experience"
                value="middle"
                onChange={this.handleChange}
                checked={this.state.experience === 'middle'}
              />
              middle
            </span>
          </label>

          <label htmlFor="" className="level__field">
            <span className="level__title">
              <input
                className="level__name"
                type="radio"
                name="experience"
                value="senior"
                onChange={this.handleChange}
                checked={this.state.experience === 'senior'}
              />
              senior
            </span>
          </label>
          <button type="submit">Отправить</button>
        </div>
      </Form>
    );
  }
}
