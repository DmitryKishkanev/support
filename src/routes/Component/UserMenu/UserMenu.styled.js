import styled from '@emotion/styled';
import { Box, Typography, Button } from '@mui/material';

const UserMenuBox = styled(Box)`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 16px;
`;

const UserMenuName = styled(Typography)`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: rgb(223, 186, 1);
`;

const UserMenuButton = styled(Button)`
  color: rgb(223, 186, 1);
  background-color: black;
  border-radius: 6px;
  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: black;
    background-color: red;
  }
`;

export { UserMenuBox, UserMenuName, UserMenuButton };
