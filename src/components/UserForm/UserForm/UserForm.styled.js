import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 15px;

  background-color: #d4f2ff;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  .form__name {
    margin-top: 0;

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

  button {
    height: 40px;
    margin-left: auto;
  }

  .level {
    margin-top: 0;
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 20px;
    line-height: 1.19;

    letter-spacing: 0.03em;
  }

  .level__field {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .level__name {
    width: 17px;
    height: 17px;
    margin-right: 10px;
  }

  .level__title {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.19;

    letter-spacing: 0.03em;
  }
`;

export { Form };
