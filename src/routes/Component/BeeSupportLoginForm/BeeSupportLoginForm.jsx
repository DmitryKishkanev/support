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

const BeeSupportLoginForm = () => {
  const [loginValue, setLoginValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(loginValue));
    setLoginValue('');
    navigate('/', { replace: true });
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <LoginFormLabel>
        <LoginFormSpan>Please enter your login</LoginFormSpan>
        <LoginFormInput
          type="text"
          name="login"
          value={loginValue}
          onChange={e => setLoginValue(e.target.value)}
        />
      </LoginFormLabel>

      <LoginFormButton type="submit" disabled={!loginValue.trim()}>
        Log in
      </LoginFormButton>
    </LoginForm>
  );
};

export default BeeSupportLoginForm;
