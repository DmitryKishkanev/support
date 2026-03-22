import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 500px;
  padding: 15px;

  border-radius: 5px;
  background-color: var(--primary-background-color);

  box-shadow: var(--primary-item-shadow);

  h2 {
    margin-top: 0;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  .Dropdown__menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: teal;
    color: var(--secondary-color);
  }
`;
