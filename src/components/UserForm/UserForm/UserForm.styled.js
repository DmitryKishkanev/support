import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 15px;

  border-radius: 5px;
  background-color: var(--primary-background-color);

  box-shadow: var(--primary-item-shadow);

  .form__name {
    margin-top: 0;
    margin-bottom: 30px;

    font-weight: 700;
    font-size: 24px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
  }

  .form__box {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 30px;
    width: 100%;
    margin-bottom: 20px;
  }

  .label {
    display: flex;
    flex-direction: column;
  }

  .label__name {
    margin-bottom: 6px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.19;

    letter-spacing: 0.03em;
  }

  .label__field {
    width: 270px;
    padding: 4px;

    border-radius: 4px;

    outline: none;
    cursor: pointer;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }

  button {
    height: 40px;
    margin-left: auto;
  }

  .level {
    margin-top: 0;
    margin-bottom: 10px;
    margin-right: auto;

    color: var(--primary-color);

    font-weight: 400;
    font-size: 20px;
    line-height: 1.19;

    letter-spacing: 0.03em;
  }

  .level__field {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
    }
  }

  .level__status {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    position: relative;

    &:checked {
      border-color: var(--secondary-color);
    }

    &:checked::after {
      content: '';
      width: 12px;
      height: 12px;
      background-color: var(--secondary-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .level__name {
    appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    margin-right: 10px;

    border: 2px solid var(--primary-color);
    border-radius: 4px;

    cursor: pointer;

    &:checked {
      border-color: var(--secondary-color);
    }

    &:checked::after {
      content: '✔';
      color: var(--secondary-color);
      font-size: 18px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .level__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.19;

    letter-spacing: 0.03em;
  }
`;

export { Form };
