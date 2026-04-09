import useCustomContext from '@/components/ContextAlert/Context/useCustomContext.js';
import { AlertBox } from './Alert.styled';

const Alert = () => {
  const contextValue = useCustomContext();

  return (
    contextValue.toggleValue && (
      <AlertBox>Lorem ipsum dolor sit amet, consectetur adipisicing.</AlertBox>
    )
  );
};

export default Alert;
