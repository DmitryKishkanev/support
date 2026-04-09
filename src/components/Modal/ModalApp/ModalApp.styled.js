import styled from '@emotion/styled';

const OpenBtn = styled.button``;

const TimeFaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  border-radius: 4px;

  background-color: var(--primary-background-color);
  box-shadow: var(--primary-item-shadow);
`;

const TimeFaceTitle = styled.h1`
  margin-top: 0;
`;

export { OpenBtn, TimeFaceContainer, TimeFaceTitle };
