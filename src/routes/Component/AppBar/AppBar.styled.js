import styled from '@emotion/styled';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';

const AppBarComponent = styled(AppBar)`
  position: static;

  /* background-color: rgba(25, 118, 210, 0.3); */
  background-color: rgba(8, 121, 120, 0.5);
`;

const AppBarContainer = styled(Container)`
  max-width: false;
`;

const AppBarToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 108px;

  &.MuiToolbar-root {
    padding: 10px 0;
  }
`;

const AppBarBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AppBarLogo = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(199, 141, 75);

  font-weight: 700;
  font-size: 27px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  &:hover img,
  &:focus img {
    box-shadow: 0 0 10px rgba(234, 255, 0, 1);
  }
`;

const AppBarImg = styled(Box)`
  width: 60px;

  border-radius: 50%;
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);
  background-color: rgb(199, 141, 75);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export {
  AppBarComponent,
  AppBarContainer,
  AppBarToolbar,
  AppBarBox,
  AppBarLogo,
  AppBarImg,
};
