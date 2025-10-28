import { useState, useMemo } from 'react';
import authContext from '@/contexts/authContext';
import avatar from '@/contexts/avatar.png';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogIn = () => {
    setUser({ name: 'Манго', avatar });
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  // useMemo — это хук, который мемоизирует (кеширует) результат вычисления значения, чтобы не пересчитывать его при каждом рендере.
  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut };
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
