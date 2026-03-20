import styled from '@emotion/styled';
import { Box } from '@mui/material';
import GuestBg from '@/assets/bg.jpg';
import LoggedInBg from '@/assets/loggedInBg.png';

const LayoutMainContainer = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;

  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  background-size: cover;
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
