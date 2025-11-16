import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const SupportApplicationsMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  h2 {
    margin: 0;

    font-weight: 700;
    font-size: 42px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0;

    color: rgb(33, 150, 243);

    font-weight: 400;
    font-size: 32px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }
`;

export { SupportApplicationsMain };
