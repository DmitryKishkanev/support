import { useDispatch } from 'react-redux';
import {
  UserMenuBox,
  UserMenuName,
  UserMenuButton,
} from '@/routes/Component/UserMenu/UserMenu.styled';
import { logOut } from '@/redux/auth';
import { useAuth } from '@/redux/auth/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <UserMenuBox>
      <UserMenuName>Hi, {userName}</UserMenuName>

      <UserMenuButton
        variant="contained"
        disableElevation
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </UserMenuButton>
    </UserMenuBox>
  );
};

export default UserMenu;
