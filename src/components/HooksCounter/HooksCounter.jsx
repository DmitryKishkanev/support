import { useState, useEffect } from 'react';
import { CounterBox } from 'components/HooksCounter/HooksCounter.styled';

export default function HooksCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const [totalClicks, setTotalClicks] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    setTotalClicks(counterA + counterB);
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB, totalClicks]);

  // useEffect(() => {
  //   const totalClicks = counterA + counterB;
  //   document.title = `Всего кликнули ${totalClicks} раз`;
  // }, [counterA, counterB]);

  return (
    <CounterBox>
      <h2>Всего кликнули {totalClicks} раз</h2>

      <div>
        <button type="button" onClick={handleCounterAIncrement}>
          Кликнули counterA {counterA} раз
        </button>

        <button type="button" onClick={handleCounterBIncrement}>
          Кликнули counterA {counterB} раз
        </button>
      </div>
    </CounterBox>
  );
}
