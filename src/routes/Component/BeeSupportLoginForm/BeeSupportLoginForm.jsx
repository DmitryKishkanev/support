import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/user/slice';
import { useNavigate } from 'react-router-dom';
import {
  LoginForm,
  LoginFormLabel,
  LoginFormSpan,
  LoginFormInput,
  LoginFormButton,
} from '@/routes/Component/BeeSupportLoginForm/BeeSupportLoginForm.styled';
import { logInIn } from '@/redux/auth';

const BeeSupportLoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(login));
    dispatch(logInIn({ email, password }));
    setLogin('');
    setEmail('');
    navigate('/', { replace: true });
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginFormLabel>
        <LoginFormSpan>Please enter your login</LoginFormSpan>
        <LoginFormInput
          type="text"
          name="login"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </LoginFormLabel>

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
          type="text"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </LoginFormLabel>

      <LoginFormButton type="submit" disabled={!login.trim()}>
        Log in
      </LoginFormButton>
    </LoginForm>
  );
};

export default BeeSupportLoginForm;
