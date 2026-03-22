import styled from '@emotion/styled';

const ContactEl = styled.li`
  color: var(--primary-color);

  div {
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  button {
    padding: 8px 18px;
    margin-left: auto;
  }
`;

export { ContactEl };
