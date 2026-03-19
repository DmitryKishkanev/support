import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

const NavigationBox = styled(Box)`
  display: flex;
  gap: 16px;
  margin: 0 0 0 60px;
  padding: 0;
  cursor: pointer;
`;

const NavigationButton = styled(Button)`
  color: rgb(199, 141, 75);

  transition:
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.09);
    color: rgb(223, 186, 1);
  }

  &.active {
    color: rgb(223, 186, 1);
  }
`;

export { NavigationBox, NavigationButton };
