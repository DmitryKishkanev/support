import { useContext } from 'react';
import authContext from 'components/ContextAlert/Context/authContext';

const useCustomContext = () => {
  return useContext(authContext);
};

export default useCustomContext;
