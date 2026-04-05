import styled from '@emotion/styled';

const ContactEl = styled.li`
  color: var(--primary-color);

  div {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  p {
    margin: 0;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
    color: var(--primary-color);
  }

  button {
    padding: 5px 15px;
    margin-left: auto;
  }
`;

export { ContactEl };
