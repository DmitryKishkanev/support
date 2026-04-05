import styled from '@emotion/styled';

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--primary-color);
  }

  a {
    font-weight: 400;
  }
`;
