import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
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

  color: rgb(199, 141, 75);
  border: 2px solid rgb(199, 141, 75);
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
    color: rgb(223, 186, 1);
    border-color: rgb(223, 186, 1);
  }
`;

const IsLoggedInHomePageBox = styled(Box)`
  display: flex;
  /* gap: 100px; */
  /* align-items: center; */
  /* justify-content: center; */

  width: 100%;
  height: calc(100vh - 108px);
`;

const pulse = keyframes`
  0% {
    color: rgb(199, 141, 75);
    text-shadow: 0 0 5px rgba(223, 186, 1, 0.5);
  }
  50% {
    color: rgb(223, 186, 1);
    text-shadow: 0 0 20px rgba(223, 186, 1, 1),
                 0 0 40px rgba(223, 186, 1, 0.8);
  }
  100% {
    color: rgb(199, 141, 75);
    text-shadow: 0 0 5px rgba(223, 186, 1, 0.5);
  }


`;

const IsLoggedInHomePageTitle = styled(Typography)`
  display: flex;
  padding: 10px;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 40px;

  color: rgb(199, 141, 75);
  text-shadow: 0 0 15px rgb(223, 186, 1);

  font-weight: 700;
  font-size: 15px;
  line-height: 1.19;
  /* text-align: center; */
  letter-spacing: 0.03em;
  text-transform: uppercase;

  animation: ${pulse} 2s infinite;
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
