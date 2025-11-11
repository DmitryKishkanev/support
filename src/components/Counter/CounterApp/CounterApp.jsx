import Counter from 'components/Counter/Counter';

export default function CounterApp() {
  return (
    <div>
      <Counter />
      <Counter initialValue={10} />
    </div>
  );
}
