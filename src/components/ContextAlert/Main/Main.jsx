import useCustomContext from 'components/ContextAlert/Context/useCustomContext';

const Main = () => {
  const contextValue = useCustomContext();

  return (
    <button onClick={() => contextValue.toggle(!contextValue.toggleValue)}>
      {contextValue.toggleValue ? 'Close Alert' : 'Open Alert'}
    </button>
  );
};

export default Main;
