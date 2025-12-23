import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '@/redux/user/slice';

const BeeSupportUserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);

  return (
    <div>
      {login}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default BeeSupportUserMenu;
