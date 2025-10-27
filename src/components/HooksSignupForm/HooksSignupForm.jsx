import useLocalStorage from '@/hooks/useLocalStorage';
import { FormContainer } from 'components/HooksSignupForm/HooksSignupForm.styled';

export default function HooksSignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <h1>Форма регистрации</h1>
      <label>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </FormContainer>
  );
}
