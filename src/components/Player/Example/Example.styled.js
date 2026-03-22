import styled from '@emotion/styled';

const SelectedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

  h1 {
    margin-top: 0;

    font-weight: 700;
    font-size: 20px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

export { SelectedVideoContainer };
