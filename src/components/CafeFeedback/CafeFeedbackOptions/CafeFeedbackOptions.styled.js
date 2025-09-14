import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const CafeFeedbackButton = styled.button`
  width: 93px;
  height: 40px;

  background-color: ${({ variant }) =>
    variant === 'reset' ? '#dc3545' : '#212121'};

  outline: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

export { Container, CafeFeedbackButton };
