import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;

  width: 300px;
  margin-bottom: 10px;

  .label__name {
    margin-right: 10px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  .label__field {
    width: 100%;
    height: 30px;
    padding: 8px;

    border: 1px solid black;
    border-radius: 4px;
    background-color: white;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: black;
  }
`;
