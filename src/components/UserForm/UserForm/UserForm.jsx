import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'components/UserForm/UserForm/UserForm.styled';

export default class UserForm extends Component {
  state = {
    name: '',
    surname: '',
    experience: 'junior',
    license: false,
  };

  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
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

  handleLicenseChange = event => {
    this.setState({ license: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      name: '',
      surname: '',
      experience: 'junior',
      license: false,
    });
  };

  render() {
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <h2 className="form__name">Форма пользователя</h2>

        <div className="form__box">
          <label className="label">
            <span className="label__name">Имя</span>
            <input
              className="label__field"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label className="label">
            <span className="label__name">Фамилия</span>
            <input
              className="label__field"
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <p className="level">Ваш уровень:</p>

        <div className="form__box">
          <label className="level__field">
            <input
              className="level__name"
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            <span className="level__title">junior</span>
          </label>

          <label className="level__field">
            <input
              className="level__name"
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            <span className="level__title">middle</span>
          </label>

          <label className="level__field">
            <input
              className="level__name"
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            <span className="level__title">senior</span>
          </label>
        </div>

        <label className="level__field">
          <input
            className="level__name"
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license}
          />
          <span className="level__title">Согласен с условием</span>
        </label>

        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </Form>
    );
  }
}
