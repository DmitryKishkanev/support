import styled from '@emotion/styled';

const MaterialContainer = styled.div`
  width: 500px;
  padding: 10px;

  background-color: var(--primary-background-color);
  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

  h1 {
    text-align: center;
    margin: 0;

    font-weight: 700;
    font-size: 32px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

const Loader = styled.div`
  color: blue;
`;
export { MaterialContainer, Loader };
