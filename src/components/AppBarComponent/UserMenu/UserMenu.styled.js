import styled from '@emotion/styled';

const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 5px;

  box-shadow: var(--secondary-item-shadow);

  img {
    width: 100px;
    height: 100px;
    border: 3px solid var(--primary-color)
    border-radius: 50px;
  }

  p {
    margin: 0;

    color: var(--primary-color);

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

export { UserMenuContainer };
