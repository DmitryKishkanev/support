import Counter from 'components/Counter/Counter';
import { CounterAppContainer } from 'components/Counter/CounterApp/CounterApp.styled';

export default function CounterApp() {
  return (
    <CounterAppContainer>
      <Counter />
      <Counter initialValue={10} />
    </CounterAppContainer>
  );
}
