import { useState, useEffect, useRef } from 'react';
import { OnFirstRenderBox } from 'components/SkipEffectOnFirstRender/SkipEffectOnFirstRender.styled';

export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  // Игнорит первый рендер
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    console.log(`Выполняется useEffect - ${Date.now()}`);
  });

  return (
    <OnFirstRenderBox>
      <h1>SkipEffectOnFirstRender</h1>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <p>
        <code>useEffect</code> этот компонент не выполняется на первом рендере
      </p>
    </OnFirstRenderBox>
  );
}
