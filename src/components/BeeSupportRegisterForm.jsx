import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '@/redux/user/slice';
import { useNavigate } from 'react-router-dom';
import {
  RegisterForm,
  RegisterFormTitle,
  RegisterFormLabel,
  RegisterFormSpan,
  RegisterFormInput,
  RegisterFormButton,
} from 'components/BeeSupportRegisterForm.styled';

const BeeSupportRegisterForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordAgainValue, setPasswordAgainValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allFieldsFilled =
    nameValue.trim() &&
    emailValue.trim() &&
    passwordValue.trim() &&
    passwordAgainValue.trim();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(nameValue));
    setNameValue('');
    navigate('/', { replace: true });
  };

  return (
    <RegisterForm onSubmit={handleSubmit}>
      <RegisterFormTitle>Please fill in all fields</RegisterFormTitle>
      <RegisterFormLabel>
        <RegisterFormSpan>Name</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="name"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
      </RegisterFormLabel>
      <RegisterFormLabel>
        <RegisterFormSpan>Email</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="email"
          value={emailValue}
          onChange={e => setEmailValue(e.target.value)}
        />
      </RegisterFormLabel>
      <RegisterFormLabel>
        <RegisterFormSpan>Create a password</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="password"
          value={passwordValue}
          onChange={e => setPasswordValue(e.target.value)}
        />
      </RegisterFormLabel>
      <RegisterFormLabel>
        <RegisterFormSpan>Please enter your password again</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="passwordAgain"
          value={passwordAgainValue}
          onChange={e => setPasswordAgainValue(e.target.value)}
        />
      </RegisterFormLabel>

      <RegisterFormButton type="submit" disabled={!allFieldsFilled.trim()}>
        Register
      </RegisterFormButton>
    </RegisterForm>
  );
};

export default BeeSupportRegisterForm;
