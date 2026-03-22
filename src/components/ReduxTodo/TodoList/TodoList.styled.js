import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 434px;
  padding: 15px;

  background-color: var(--primary-background-color);
  border-radius: 4px;

  box-shadow: var(--primary-item-shadow);

  h2 {
    margin-top: 0;
    margin-bottom: 20px;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  p {
    margin: 0 auto 0 0;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;

    color: var(--primary-color);
  }

  button {
    width: 45px;
    height: 45px;
    margin-left: auto;
  }
`;

const TodoListBox = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  width: 900px;
  margin: 0;
  padding: 15px;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;

  border-radius: 4px;
  box-shadow: var(--primary-item-shadow);

  transition:
    /* transform var(--transition-time) var(--transition-type), */ box-shadow
    var(--transition-time) var(--transition-type);

  &:hover,
  &:focus {
    /* transform: scale(1.01); */
    /* border: 1px solid var(--primary-color); */
    box-shadow: var(--secondary-item-shadow);
  }
`;

export { Container, TodoListBox, TodoItem };
