import styled from '@emotion/styled';
import { ImSpinner } from 'react-icons/im';

const SpinnerBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpinner = styled(ImSpinner)`
  margin-right: 10px;
  animation: spin 2s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerBox, StyledSpinner };
