import { useContext } from 'react';
import Navigation from 'components/AppBar/Navigation';
import authContext from '@/contexts/auth/Context';

export default function AppBar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);
  return (
    <header>
      <Navigation />

      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClock={onLogIn}>
          Войти
        </button>
      )}
    </header>
  );
}
