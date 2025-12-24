import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BeeSupportUserMenu from 'components/BeeSupportUserMenu';
import beeSupportImg from '@/assets/bee_support.png';
import {
  HeaderEl,
  HeaderElBox,
  HeaderElLogoBox,
  HeaderElTitle,
  LayoutList,
  StyledNavLink,
} from 'components/Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      <HeaderEl>
        <HeaderElBox>
          <StyledNavLink to="/">
            <HeaderElLogoBox>
              <img src={beeSupportImg} alt="logo" width="70" />
              <HeaderElTitle>Bee_Support</HeaderElTitle>
            </HeaderElLogoBox>
          </StyledNavLink>

          {isLoggedIn && (
            <LayoutList>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/SupportApplications">
                  Support applications
                </StyledNavLink>
              </li>
            </LayoutList>
          )}
        </HeaderElBox>

        {!isLoggedIn && (
          <LayoutList>
            <li>
              <StyledNavLink to="/login">Log in</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </li>
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
