import { NavLink } from 'react-router-dom';
import { useAuth } from '@/redux/auth/useAuth';
import {
  NavigationBox,
  NavigationButton,
} from '@/routes/Component/Navigation/Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationBox>
      <NavigationButton component={NavLink} to="/" variant="text">
        Home
      </NavigationButton>

      {isLoggedIn && (
        <NavigationButton
          component={NavLink}
          to="/SupportApplications"
          variant="text"
        >
          Support applications
        </NavigationButton>
      )}
    </NavigationBox>
  );
};

export default Navigation;
