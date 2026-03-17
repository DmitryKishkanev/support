import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@/routes/Component/AppBar';
import { LayoutMainContainer } from '@/routes/Component/Layout/Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <LayoutMainContainer>
          <Outlet />
        </LayoutMainContainer>
      </Suspense>

      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
