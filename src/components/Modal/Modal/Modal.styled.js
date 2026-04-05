import styled from '@emotion/styled';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .Modal__content {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    transform: translate(-50%, -50%);
    /* min-height: 300px; */
    max-width: 600px;
    width: 100%;
    padding: 15px;

    background-color: rgb(8, 121, 120);
    border-radius: 4px;
    box-shadow: var(--primary-item-shadow);
  }

  h1 {
    margin-top: 0;

    text-align: center;
  }

  p {
    margin-top: 0;
    color: var(--primary-color);
  }

  .Close__btn {
    margin-left: auto;
  }
`;

const OpenBtn = styled.button`
  width: 100px;
`;

export { ModalContainer, OpenBtn };
