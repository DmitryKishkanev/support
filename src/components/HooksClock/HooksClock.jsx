import { useState, useEffect, useRef } from 'react';
import { ClockBox } from 'components/HooksClock/HooksClock.styled';

export default function HooksClock() {
  const [time, setTime] = useState(() => new Date());
  //  useRef() - объект со свойством current - для сохранения данных между рендерами.
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);

    // Вызывается перед последним рендером(если не указать массив зависимостей - будеть вызываться перед каждым ререндером)
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <ClockBox>
      <p>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </ClockBox>
  );
}
