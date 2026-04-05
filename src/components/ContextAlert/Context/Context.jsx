import { useState } from 'react';
import authContext from 'components/ContextAlert/Context/authContext';

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
