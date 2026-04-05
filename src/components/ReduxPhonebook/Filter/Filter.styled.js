import styled from '@emotion/styled';

const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-bottom: 30px;

  span {
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 22px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: var(--primary-color);
  }

  input {
    height: 33px;
    padding: 3px;

    border-radius: 4px;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;

export { FilterLabel };
