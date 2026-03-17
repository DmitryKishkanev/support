import { NavLink } from 'react-router-dom';
import { useAuth } from '@/redux/auth/useAuth';
import Navigation from '@/routes/Component/Navigation';
import UserMenu from '@/routes/Component/UserMenu';
import AuthNav from '@/routes/Component/AuthNav';
import beeSupportImg from '@/assets/bee_support.png';
import {
  AppBarComponent,
  AppBarContainer,
  AppBarToolbar,
  AppBarBox,
  AppBarLogo,
  AppBarImg,
} from '@/routes/Component/AppBar/AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarComponent>
      <AppBarContainer maxWidth={false}>
        <AppBarToolbar>
          <AppBarBox>
            <AppBarLogo component={NavLink} to="/" variant="h4">
              <AppBarImg component="img" src={beeSupportImg} alt="logo" />
              Bee_Support
            </AppBarLogo>
            <Navigation />
          </AppBarBox>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}

          {isLoggedIn && <BeeSupportUserMenu />}
        </AppBarToolbar>
      </AppBarContainer>
    </AppBarComponent>
  );
};

export default AppBar;
