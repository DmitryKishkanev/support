import { useState, useEffect, useRef } from 'react';
import { ClockBox } from 'components/HooksClock/HooksClock.styled';

export default function HooksClock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);

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
