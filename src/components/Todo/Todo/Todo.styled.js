import styled from '@emotion/styled';

const TodoCheckbox = styled.input`
  appearance: none;
  position: relative;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  border: 1px solid var(--primary-color);
  border-radius: 4px;

  cursor: pointer;

  &:checked {
    background-color: var(--primary-color);
    border-color: var(--secondary-color);
  }

  &:checked::after {
    content: '✔';
    color: white;
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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

  color: var(--primary-color) !important;

  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

export { TodoCheckbox, TodoText };
