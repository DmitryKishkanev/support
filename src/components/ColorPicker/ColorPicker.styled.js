import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 5px;

  box-shadow: var(--primary-item-shadow);

  .ColorPicker__title {
    margin-top: 0;
    margin-bottom: 25px;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0 auto 20px 32px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: var(--primary-color);
  }

  div {
    display: flex;
    flex-direction: row;
  }

  .ColorPicker__option {
    width: 50px;
    height: 50px;
    margin-right: 20px;

    border: none;
    outline: none;
    cursor: pointer;

    transition: transform 250ms linear;

    :last-of-type {
      margin-right: 0;
    }

    &.active {
      transform: scale(1.2);
    }
  }
`;
