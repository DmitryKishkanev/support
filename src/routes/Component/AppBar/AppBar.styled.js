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

  background-color: var(--primary-background-color);
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
  color: var(--primary-color);

  font-weight: 700;
  font-size: 27px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  transition: transform var(--transition-time) var(--transition-type);

  &:hover,
  &:focus {
    transform: scale(1.07);
  }

  &:hover img,
  &:focus img {
    box-shadow: var(--secondary-item-shadow);
  }
`;

const AppBarImg = styled(Box)`
  width: 60px;

  border-radius: 50%;
  background-color: var(--primary-color);
  transition: box-shadow var(--transition-time) var(--transition-type);
`;

export {
  AppBarComponent,
  AppBarContainer,
  AppBarToolbar,
  AppBarBox,
  AppBarLogo,
  AppBarImg,
};
