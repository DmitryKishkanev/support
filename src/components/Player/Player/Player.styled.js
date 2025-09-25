import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export { PlayerWrapper, StyledPlayer };
