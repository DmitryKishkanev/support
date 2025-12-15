import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderEl, LayoutList, StyledNavLink } from 'components/Layout.styled';

const Layout = () => {
  return (
    <>
      <HeaderEl>
        <StyledNavLink to="/">
          <h1>Bee_Support</h1>
        </StyledNavLink>

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
      </HeaderEl>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
