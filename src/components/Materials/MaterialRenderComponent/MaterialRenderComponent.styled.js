import styled from '@emotion/styled';

const MaterialContainer = styled.div`
  width: 500px;
  padding: 10px;
  margin-bottom: 50px;

  background-color: #d4f2ff;
  border-radius: 4px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

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
