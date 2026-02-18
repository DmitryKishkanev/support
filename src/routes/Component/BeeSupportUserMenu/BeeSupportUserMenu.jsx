import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '@/redux/user/slice';
import {
  UserMenuBox,
  UserMenuName,
  UserMenuButton,
} from '@/routes/Component/BeeSupportUserMenu/BeeSupportUserMenu.styled';
// import { getIsLoggedIn } from '@/redux/auth/';

const BeeSupportUserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  // const login = useSelector(getIsLoggedIn);

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
