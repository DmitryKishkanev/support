import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BeeSupportUserMenu from '@/routes/Component/BeeSupportUserMenu';
import beeSupportImg from '@/assets/bee_support.png';
import {
  HeaderEl,
  HeaderElBox,
  HeaderElLogoLink,
  HeaderElImg,
  HeaderElTitle,
  LayoutList,
  LayoutListItem,
  StyledNavLink,
} from '@/routes/Component/Layout/Layout.styled';
import { useAuth } from '@/redux/auth/useAuth';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <HeaderEl>
        <HeaderElBox>
          <HeaderElLogoLink to="/">
            <HeaderElImg src={beeSupportImg} alt="logo" />
            <HeaderElTitle>Bee_Support</HeaderElTitle>
          </HeaderElLogoLink>

          {isLoggedIn && (
            <LayoutList>
              <LayoutListItem>
                <StyledNavLink to="/">Home</StyledNavLink>
              </LayoutListItem>
              <LayoutListItem>
                <StyledNavLink to="/SupportApplications">
                  Support applications
                </StyledNavLink>
              </LayoutListItem>
            </LayoutList>
          )}
        </HeaderElBox>

        {!isLoggedIn && (
          <LayoutList>
            <LayoutListItem>
              <StyledNavLink to="/login">Log in</StyledNavLink>
            </LayoutListItem>
            <LayoutListItem>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </LayoutListItem>
          </LayoutList>
        )}

        {isLoggedIn && <BeeSupportUserMenu />}
      </HeaderEl>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
