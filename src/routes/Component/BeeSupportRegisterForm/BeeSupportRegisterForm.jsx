import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { logIn } from '@/redux/user/slice';
import { useNavigate } from 'react-router-dom';
import {
  RegisterForm,
  RegisterFormTitle,
  RegisterFormLabel,
  RegisterFormSpan,
  RegisterFormInput,
  RegisterFormButton,
} from '@/routes/Component/BeeSupportRegisterForm/BeeSupportRegisterForm.styled';
import { register } from '@/redux/auth';

const BeeSupportRegisterForm = () => {
  // const [nameValue, setNameValue] = useState('');
  // const [emailValue, setEmailValue] = useState('');
  // const [passwordValue, setPasswordValue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [passwordAgainValue, setPasswordAgainValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allFieldsFilled =
    // name.trim() && email.trim() && password.trim() && passwordAgainValue.trim();
    name.trim() && email.trim() && password.trim();

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(logIn(name));
    dispatch(
      register({
        name,
        email,
        password,
        // passwordAgainValue,
      }),
    );
    setName('');
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
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </RegisterFormLabel>

      <RegisterFormLabel>
        <RegisterFormSpan>Email</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </RegisterFormLabel>

      <RegisterFormLabel>
        <RegisterFormSpan>Create a password</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </RegisterFormLabel>

      {/* <RegisterFormLabel>
        <RegisterFormSpan>Please enter your password again</RegisterFormSpan>
        <RegisterFormInput
          type="text"
          name="passwordAgain"
          value={passwordAgainValue}
          onChange={e => setPasswordAgainValue(e.target.value)}
        />
      </RegisterFormLabel> */}

      <RegisterFormButton type="submit" disabled={!allFieldsFilled.trim()}>
        Register
      </RegisterFormButton>
    </RegisterForm>
  );
};

export default BeeSupportRegisterForm;
