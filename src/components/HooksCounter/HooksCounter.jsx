import { useState, useEffect } from 'react';

export default function HooksCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули counterA {counterA} раз
      </button>

      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули counterA {counterB} раз
      </button>
    </>
  );
}
