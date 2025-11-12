import styled from '@emotion/styled';

const TimeFaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  border-radius: 4px;

  background-color: #d4f2ff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const TimeFaceTitle = styled.h1`
  margin-top: 0;
`;

export { TimeFaceContainer, TimeFaceTitle };
