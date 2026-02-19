import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allFieldsFilled =
    // name.trim() && email.trim() && password.trim() && passwordAgainValue.trim();
    name.trim() && email.trim() && password.trim();

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
      navigate('/', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      console.error('Login failed:', error);
    }
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
