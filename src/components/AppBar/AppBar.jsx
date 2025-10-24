import { useContext } from 'react';
import UserMenu from 'components/AppBar/UserMenu';
import authContext from '@/contexts/auth/Context';

export default function AppBar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);
  return (
    <header>
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Войти
        </button>
      )}
    </header>
  );
}
