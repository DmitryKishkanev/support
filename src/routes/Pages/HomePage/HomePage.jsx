// import useLogOutRedirect from '@/hooks/useLogOuteRedirect';
import { NavLink } from 'react-router-dom';
import {
  IsLoggedOutHomePageBox,
  IsLoggedOutHomePageBtn,
  IsLoggedInHomePageBox,
  IsLoggedInHomePageTitle,
} from '@/routes/Pages/HomePage/HomePage.styled';
import { useAuth } from '@/redux/auth/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  // useLogOutRedirect();

  return (
    <>
      {isLoggedIn ? (
        <IsLoggedInHomePageBox>
          <IsLoggedInHomePageTitle
            variant="h2"
            component={NavLink}
            to="/SupportApplications"
          >
            Welcome! This resource provides reference material on building
            functional and class components in React
          </IsLoggedInHomePageTitle>
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
