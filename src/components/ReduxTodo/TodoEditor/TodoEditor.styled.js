import styled from '@emotion/styled';

const TodoEditorForm = styled.form`
  display: flex;
  margin-bottom: 20px;
  margin-right: auto;

  textarea {
    width: 300px;
    height: 70px;
    padding: 8px;
    margin-right: 15px;

    border-radius: 6px;

    resize: none;
    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: var(--secondary-color);
  }

  .todoEditor__button {
    height: 40px;
  }
`;

export { TodoEditorForm };
