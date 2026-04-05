import useCustomContext from 'components/ContextAlert/Context/useCustomContext';
import { AlertBox } from 'components/ContextAlert/Alert/Alert.styled';

const Alert = () => {
  const contextValue = useCustomContext();

  return (
    contextValue.toggleValue && (
      <AlertBox>Lorem ipsum dolor sit amet, consectetur adipisicing.</AlertBox>
    )
  );
};

export default Alert;
