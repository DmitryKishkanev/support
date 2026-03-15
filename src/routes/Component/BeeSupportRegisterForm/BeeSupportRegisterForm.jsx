import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  RegisterFormBox,
  RegisterFormTitle,
  RegisterFormField,
  RegisterFormError,
  RegisterFormButton,
} from '@/routes/Component/BeeSupportRegisterForm/BeeSupportRegisterForm.styled';
import { register } from '@/redux/auth';

const BeeSupportRegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const allFieldsFilled =
  //   // name.trim() && email.trim() && password.trim() && passwordAgainValue.trim();
  //   name.trim() && email.trim() && password.trim();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // dispatch возвращает промис, а unwrap превращает его в обычный промис с payload
      await dispatch(
        register({
          name,
          email,
          password,
          // passwordAgainValue,
        }),
      );
      // если регистрация успешна, очищаем форму и переходим на главную
      setName('');
      setEmail('');
      setPassword('');
      // Можно не делать если есть приватные и публичные роуты
      navigate('/', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      setErrorMessage(error.message || 'Register failed');
    }
  };

  return (
    <RegisterFormBox component="form" onSubmit={handleSubmit}>
      <RegisterFormTitle variant="h5">Registration</RegisterFormTitle>
      <RegisterFormField
        label="Name"
        type="text"
        name="name"
        required
        fullWidth
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <RegisterFormField
        label="Email"
        type="email"
        name="email"
        required
        fullWidth
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <RegisterFormField
        label="Password"
        type="password"
        name="password"
        required
        fullWidth
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {errorMessage && (
        <RegisterFormError variant="body2">
          {`${errorMessage} - try again`}
        </RegisterFormError>
      )}

      <RegisterFormButton
        variant="outlined"
        type="submit"
        disabled={!name || !email || !password}
      >
        Sign Up
      </RegisterFormButton>
    </RegisterFormBox>
  );
};

export default BeeSupportRegisterForm;
