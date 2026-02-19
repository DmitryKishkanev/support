import { useSelector, useDispatch } from 'react-redux';
import {
  UserMenuBox,
  UserMenuName,
  UserMenuButton,
} from '@/routes/Component/BeeSupportUserMenu/BeeSupportUserMenu.styled';
import { getUserName } from '@/redux/auth/';
import { logOut } from '@/redux/auth';

const BeeSupportUserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(getUserName);

  return (
    <UserMenuBox>
      <UserMenuName>Hi, {login}</UserMenuName>

      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </UserMenuButton>
    </UserMenuBox>
  );
};

export default BeeSupportUserMenu;
