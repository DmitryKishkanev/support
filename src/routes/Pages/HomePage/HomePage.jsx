// import useLogOutRedirect from '@/hooks/useLogOuteRedirect';
import beeSupportImg from '@/assets/bee_support.png';
import {
  HomePageContainer,
  LogOutHomePageList,
  LogOutHomePageItem,
  LogOutHomePageLink,
  LogOutHomePageImg,
  LogInHomePageBox,
  HomePageTitle,
  HomePageLink,
  HomePageImg,
} from '@/routes/Pages/HomePage/HomePage.styled';
import { useAuth } from '@/redux/auth/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  // useLogOutRedirect();

  return (
    <HomePageContainer>
      {!isLoggedIn && (
        <LogOutHomePageList>
          <LogOutHomePageItem>
            <LogOutHomePageLink to="/login">
              <LogOutHomePageImg src={beeSupportImg} alt="logo" />
              Log in
            </LogOutHomePageLink>
          </LogOutHomePageItem>
          <LogOutHomePageItem>
            <LogOutHomePageLink to="/register">
              <LogOutHomePageImg src={beeSupportImg} alt="logo" />
              Register
            </LogOutHomePageLink>
          </LogOutHomePageItem>
        </LogOutHomePageList>
      )}

      {isLoggedIn && (
        <LogInHomePageBox>
          <HomePageTitle>
            Welcome! This resource provides reference material on building
            functional and class components in React
          </HomePageTitle>
          <HomePageLink to="/SupportApplications">
            <HomePageImg src={beeSupportImg} alt="logo" />
            Go!
          </HomePageLink>
        </LogInHomePageBox>
      )}
    </HomePageContainer>
  );
};

export default HomePage;

// const HomePage = () => {
//   // useEffect(() => {
//   //   // HTTP Запрос, если нужно
//   // }, []);
//   useLogOutRedirect();

//   return (
//     <HomePageContainer>
//       <HomePageTitle>
//         Welcome! This resource provides reference material on building
//         functional and class components in React
//       </HomePageTitle>
//       <HomePageLink to="/SupportApplications">
//         <HomePageImg src={beeSupportImg} alt="logo" />
//         Go!
//       </HomePageLink>
//     </HomePageContainer>
//   );
// };

// export default HomePage;
