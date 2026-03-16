import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import BeeSupportUserMenu from '@/routes/Component/BeeSupportUserMenu';
import beeSupportImg from '@/assets/bee_support.png';
import {
  AppBarComponent,
  AppBarContainer,
  AppBarToolbar,
  AppBarBox,
  AppBarLogo,
  AppBarImg,
  LayoutList,
  LayoutListItem,
  LayoutListButton,
  MainContainer,
} from '@/routes/Component/Layout/Layout.styled';
import { useAuth } from '@/redux/auth/useAuth';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <AppBarComponent>
        <AppBarContainer maxWidth={false}>
          <AppBarToolbar>
            <AppBarBox>
              <AppBarLogo component={NavLink} to="/" variant="h4">
                <AppBarImg component="img" src={beeSupportImg} alt="logo" />
                Bee_Support
              </AppBarLogo>

              <LayoutList component="ul">
                <LayoutListItem component="li">
                  <LayoutListButton component={NavLink} to="/" variant="text">
                    Home
                  </LayoutListButton>
                </LayoutListItem>

                {isLoggedIn && (
                  <LayoutListItem component="li">
                    <LayoutListButton
                      component={NavLink}
                      to="/SupportApplications"
                      variant="text"
                    >
                      Support applications
                    </LayoutListButton>
                  </LayoutListItem>
                )}
              </LayoutList>
            </AppBarBox>

            {!isLoggedIn && (
              <LayoutList component="ul">
                <LayoutListItem component="li">
                  <LayoutListButton
                    component={NavLink}
                    to="/login"
                    variant="outlined"
                    color="inherit"
                  >
                    Log in
                  </LayoutListButton>
                </LayoutListItem>
                <LayoutListItem component="li">
                  <LayoutListButton
                    component={NavLink}
                    to="/register"
                    variant="contained"
                    color="secondary"
                  >
                    Sign Up
                  </LayoutListButton>
                </LayoutListItem>
              </LayoutList>
            )}

            {isLoggedIn && <BeeSupportUserMenu />}
          </AppBarToolbar>
        </AppBarContainer>
      </AppBarComponent>

      <Suspense fallback={<div>Loading...</div>}>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Suspense>

      {/* <footer>Footer</footer> */}
    </>

    // <>
    //   <HeaderEl>
    //     <HeaderElBox>
    //       <HeaderElLogoLink to="/">
    //         <HeaderElImg src={beeSupportImg} alt="logo" />
    //         <HeaderElTitle>Bee_Support</HeaderElTitle>
    //       </HeaderElLogoLink>

    //       <LayoutList>
    //         <LayoutListItem>
    //           <StyledNavLink to="/">Home</StyledNavLink>
    //         </LayoutListItem>

    //         {isLoggedIn && (
    //           <LayoutListItem>
    //             <StyledNavLink to="/SupportApplications">
    //               Support applications
    //             </StyledNavLink>
    //           </LayoutListItem>
    //         )}
    //       </LayoutList>
    //     </HeaderElBox>

    //     {!isLoggedIn && (
    //       <LayoutList>
    //         <LayoutListItem>
    //           <StyledNavLink to="/login">Log in</StyledNavLink>
    //         </LayoutListItem>
    //         <LayoutListItem>
    //           <StyledNavLink to="/register">Register</StyledNavLink>
    //         </LayoutListItem>
    //       </LayoutList>
    //     )}

    //     {isLoggedIn && <BeeSupportUserMenu />}
    //   </HeaderEl>

    //   <Suspense fallback={<div>Loading...</div>}>
    //     <MainContainer>
    //       <Outlet />
    //     </MainContainer>
    //   </Suspense>

    //   {/* <footer>Footer</footer> */}
    // </>
  );
};

export default Layout;

// const Layout = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <>
//       <HeaderEl>
//         <HeaderElBox>
//           <HeaderElLogoLink to="/">
//             <HeaderElImg src={beeSupportImg} alt="logo" />
//             <HeaderElTitle>Bee_Support</HeaderElTitle>
//           </HeaderElLogoLink>

//           {isLoggedIn && (
//             <LayoutList>
//               <LayoutListItem>
//                 <StyledNavLink to="/">Home</StyledNavLink>
//               </LayoutListItem>
//               <LayoutListItem>
//                 <StyledNavLink to="/SupportApplications">
//                   Support applications
//                 </StyledNavLink>
//               </LayoutListItem>
//             </LayoutList>
//           )}
//         </HeaderElBox>

//         {!isLoggedIn && (
//           <LayoutList>
//             <LayoutListItem>
//               <StyledNavLink to="/login">Log in</StyledNavLink>
//             </LayoutListItem>
//             <LayoutListItem>
//               <StyledNavLink to="/register">Register</StyledNavLink>
//             </LayoutListItem>
//           </LayoutList>
//         )}

//         {isLoggedIn && <BeeSupportUserMenu />}
//       </HeaderEl>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>

//       {/* <footer>Footer</footer> */}
//     </>
//   );
// };

// export default Layout;
