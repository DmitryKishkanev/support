import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { HeaderEl, LayoutList, StyledNavLink } from 'components/Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Домашняя</NavLink>
          </li>
          <li>
            <NavLink to="/dogs">Коллекция</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

// const Layout = () => {
//   return (
//     <>
//       <HeaderEl>
//         <StyledNavLink to="/">
//           <h1>Bee_Support</h1>
//         </StyledNavLink>

//         <LayoutList>
//           <li>
//             <StyledNavLink to="/">Home</StyledNavLink>
//           </li>
//           <li>
//             <StyledNavLink to="/SupportApplications">
//               Support applications
//             </StyledNavLink>
//           </li>
//         </LayoutList>
//       </HeaderEl>
//       <Outlet />

//       {/* <footer>Footer</footer> */}
//     </>
//   );
// };

export default Layout;
