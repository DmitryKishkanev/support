import styled from '@emotion/styled';
import { Box } from '@mui/material';
import GuestBg from '@/assets/homePage.png';
import LoggedInBg from '@/assets/isLoggedInHomePage.jpg';

const LayoutMainContainer = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;

  justify-content: center;
`;

const BackgroundWrapper = styled.div(({ isLoggedIn }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${isLoggedIn ? LoggedInBg : GuestBg})`,
    backgroundSize: 'cover',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
  };
});

export { LayoutMainContainer, BackgroundWrapper };
