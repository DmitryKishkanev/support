import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
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

  background-color: rgba(25, 118, 210, 0.9);
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
  color: rgb(223, 186, 1);

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
  background-color: rgb(223, 186, 1);

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const LayoutList = styled(Box)`
  display: flex;
  gap: 16px;
  margin: 0 0 0 60px;

  padding: 0;
`;

const LayoutListItem = styled(Box)`
  display: inline-block;

  list-style-type: none;

  cursor: pointer;
`;

const LayoutListButton = styled(Button)`
  color: rgb(223, 186, 1);

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: black;
    /* color: rgb(33, 150, 243); */
  }

  &.active {
    color: black;
  }
`;

export {
  AppBarComponent,
  AppBarContainer,
  AppBarToolbar,
  AppBarBox,
  AppBarLogo,
  AppBarImg,
  LayoutList,
  LayoutListItem,
  LayoutListButton,
};

const MainContainer = styled.main`
  display: flex;
  width: 100%;
  height: calc(100vh - 140px);
  /* min-height: calc(100vh - 207px); */
  /* height: calc(100vh - 207px); */
  justify-content: center;
  /* align-items: center; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export { MainContainer };
