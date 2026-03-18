// import useLogOutRedirect from '@/hooks/useLogOuteRedirect';
import beeSupportImg from '@/assets/bee_support.png';
import { Link, NavLink } from 'react-router-dom';
import {
  IsLoggedOutHomePageBox,
  IsLoggedOutHomePageBtn,
  IsLoggedInHomePageBox,
  IsLoggedInHomePageTitle,
  IsLoggedInHomePageBtn,
  IsLoggedInHomePageImg,
} from '@/routes/Pages/HomePage/HomePage.styled';
import { useAuth } from '@/redux/auth/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  // useLogOutRedirect();

  return (
    <>
      {isLoggedIn ? (
        <IsLoggedInHomePageBox>
          <IsLoggedInHomePageTitle variant="h2">
            Welcome! This resource provides reference material on building
            functional and class components in React
          </IsLoggedInHomePageTitle>
          <IsLoggedInHomePageBtn component={Link} to="/SupportApplications">
            <IsLoggedInHomePageImg
              component="img"
              src={beeSupportImg}
              alt="logo"
            />
            Go!
          </IsLoggedInHomePageBtn>
        </IsLoggedInHomePageBox>
      ) : (
        <IsLoggedOutHomePageBox>
          <IsLoggedOutHomePageBtn
            component={NavLink}
            to="/login"
            variant="outlined"
          >
            Log in
          </IsLoggedOutHomePageBtn>

          <IsLoggedOutHomePageBtn
            component={NavLink}
            to="/register"
            variant="outlined"
          >
            Sign Up
          </IsLoggedOutHomePageBtn>
        </IsLoggedOutHomePageBox>
      )}
    </>
  );
};

export default HomePage;
