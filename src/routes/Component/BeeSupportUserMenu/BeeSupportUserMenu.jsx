import { useDispatch } from 'react-redux';
import {
  UserMenuBox,
  UserMenuName,
  UserMenuButton,
} from '@/routes/Component/BeeSupportUserMenu/BeeSupportUserMenu.styled';
import { logOut } from '@/redux/auth';
import { useAuth } from '@/redux/auth/useAuth';

const BeeSupportUserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <UserMenuBox>
      <UserMenuName>Hi, {userName}</UserMenuName>

      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </UserMenuButton>
    </UserMenuBox>
  );
};

export default BeeSupportUserMenu;
