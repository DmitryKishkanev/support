import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

const LoaderTitle = styled.h2`
  margin: 0;
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { LoaderTitle, PlayerWrapper, StyledPlayer };
