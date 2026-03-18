import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';

const IsLoggedOutHomePageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-left: auto;
  margin-right: 300px;
`;

const IsLoggedOutHomePageBtn = styled(Button)`
  display: flex;
  align-items: center;
  padding: 6px;
  width: 100px;

  color: rgb(223, 186, 1);
  border: 2px solid rgb(223, 186, 1);
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: black;
    border-color: black;
  }
`;

const IsLoggedInHomePageBox = styled(Box)`
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 108px);
`;

const IsLoggedInHomePageTitle = styled(Typography)`
  margin: 0;

  font-weight: 500;
  font-size: 22px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
`;

const IsLoggedInHomePageBtn = styled(Button)`
  display: flex;
  align-items: center;
  padding: 6px;

  border-radius: 50%;
  box-shadow: 0 0 10px rgba(82, 103, 121, 1);
  color: black;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 700;
  font-size: 70px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(223, 186, 1);
  }
`;

const IsLoggedInHomePageImg = styled(Box)`
  width: 450px;
`;

export {
  IsLoggedOutHomePageBox,
  IsLoggedOutHomePageBtn,
  IsLoggedInHomePageBox,
  IsLoggedInHomePageTitle,
  IsLoggedInHomePageBtn,
  IsLoggedInHomePageImg,
};
