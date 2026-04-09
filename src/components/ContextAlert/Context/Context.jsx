import { useState } from 'react';
import authContext from '@/components/ContextAlert/Context/authContext.js';

const Context = ({ children }) => {
  const [toggleAlert, setToggleAlert] = useState(false);

  return (
    <authContext.Provider
      value={{ toggleValue: toggleAlert, toggle: setToggleAlert }}
    >
      {children}
    </authContext.Provider>
  );
};

export { Context };
