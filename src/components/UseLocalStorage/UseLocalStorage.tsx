import { useEffect, useState } from 'react';
import css from 'components/UseLocalStorage/UseLocalStorage.module.css';

// Кастомный хук для работы с local storage
function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return defaultValue;

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(state));
      } catch {
        // Можно добавить логирование ошибки, если нужно
      }
    }
  }, [key, state]);

  return [state, setState];
}

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <form autoComplete="off" className={css.form}>
      <h2 className={css.form__name}>Use Local Storage</h2>
      <div className={css.form__box}>
        <label className={css.label}>
          <span className={css.label__name}>Почта</span>
          <input
            className={css.label__field}
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>

        <label className={css.label}>
          <span className={css.label__name}>Пароль</span>
          <input
            className={css.label__field}
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
      </div>
    </form>
  );
}
