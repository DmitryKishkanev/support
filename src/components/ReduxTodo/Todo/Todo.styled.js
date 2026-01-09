import styled from '@emotion/styled';

const TodoCheckbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const TodoText = styled.p`
  height: 35px;
  padding: 6px;
  margin: 0 15px 0 0;

  border-radius: 5px;

  font-weight: 400;
  font-size: 20px !important;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;

  color: black !important;

  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export { TodoCheckbox, TodoText };
