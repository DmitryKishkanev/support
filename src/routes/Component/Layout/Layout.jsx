import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@/routes/Component/AppBar';
import { useAuth } from '@/redux/auth/useAuth';
import {
  LayoutMainContainer,
  BackgroundWrapper,
} from '@/routes/Component/Layout/Layout.styled';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BackgroundWrapper isLoggedIn={isLoggedIn}>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <LayoutMainContainer>
          <Outlet />
        </LayoutMainContainer>
      </Suspense>

      {/* <footer>Footer</footer> */}
    </BackgroundWrapper>
  );
};

export default Layout;
