import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  LoginForm,
  LoginFormLabel,
  LoginFormSpan,
  LoginFormInput,
  LoginFormButton,
} from '@/routes/Component/BeeSupportLoginForm/BeeSupportLoginForm.styled';
import { logIn } from '@/redux/auth';

const BeeSupportLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      navigate('/SupportApplications', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginFormLabel>
        <LoginFormSpan>Please enter your email</LoginFormSpan>
        <LoginFormInput
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </LoginFormLabel>

      <LoginFormLabel>
        <LoginFormSpan>Please enter your password</LoginFormSpan>
        <LoginFormInput
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </LoginFormLabel>

      <LoginFormButton type="submit" disabled={!email.trim()}>
        Log in
      </LoginFormButton>
    </LoginForm>
  );
};

export default BeeSupportLoginForm;
