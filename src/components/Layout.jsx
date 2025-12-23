import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BeeSupportUserMenu from 'components/BeeSupportUserMenu';
import {
  HeaderEl,
  HeaderElBox,
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
            <h1>Bee_Support</h1>
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
