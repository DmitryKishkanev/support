import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  LoginFormBox,
  LoginFormTitle,
  LoginFormField,
  LoginFormError,
  LoginFormButton,
} from '@/routes/Component/BeeSupportLoginForm/BeeSupportLoginForm.styled';
import { logIn } from '@/redux/auth';

const BeeSupportLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // dispatch возвращает промис, а unwrap превращает его в обычный промис с payload
      await dispatch(logIn({ email, password })).unwrap();

      // если логин успешный, очищаем форму и переходим на главную
      setEmail('');
      setPassword('');
      // Можно не делать если есть приватные и публичные роуты
      navigate('/SupportApplications', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      setErrorMessage(error.message || 'Login failed');
    }
  };

  return (
    <LoginFormBox component="form" onSubmit={handleSubmit}>
      <LoginFormTitle variant="h5">Log In</LoginFormTitle>

      <LoginFormField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <LoginFormField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {errorMessage && (
        <LoginFormError color="error" variant="body2">
          {`${errorMessage} - try again`}
        </LoginFormError>
      )}

      <LoginFormButton
        variant="outlined"
        type="submit"
        disabled={!email || !password}
      >
        Log in
      </LoginFormButton>
    </LoginFormBox>
  );
};

export default BeeSupportLoginForm;
