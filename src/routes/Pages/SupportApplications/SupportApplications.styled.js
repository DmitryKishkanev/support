import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SupportApplicationsMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;

  h2 {
    margin: 0;

    font-weight: 700;
    font-size: 42px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    color: var(--primary-color);
  }

  p {
    margin: 0;

    color: var(--secondary-color);

    font-weight: 400;
    font-size: 32px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-right: 15px;
    margin-left: auto;
  }

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;

    letter-spacing: 0.03em;

    color: var(--primary-color);
  }

  input {
    width: 270px;
    padding: 4px;

    border: 1px solid black;
    border-radius: 4px;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;

    color: var(--secondary-color);
  }
`;

export { SupportApplicationsMain };
