import { useContext } from 'react';
import UserMenu from 'components/AppBarComponent/UserMenu';
import authContext from '@/contexts/authContext';
import { AppBarBox } from 'components/AppBarComponent/AppBar/AppBar.styled';

export default function AppBar() {
  const { isLoggedIn, user, onLogIn, onLogOut } = useContext(authContext);
  return (
    <header>
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <AppBarBox>
          <h1>User menu</h1>
          <button type="button" onClick={onLogIn}>
            Войти
          </button>
        </AppBarBox>
      )}
    </header>
  );
}
