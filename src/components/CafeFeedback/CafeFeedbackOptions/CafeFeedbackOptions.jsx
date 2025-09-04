import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  CafeFeedbackButton,
} from 'components/CafeFeedback/CafeFeedbackOptions/CafeFeedbackOptions.styled';

const CafeFeedbackOptions = ({
  options,
  onLeaveFeedback,
  showReset,
  onReset,
}) => {
  return (
    <Container>
      {options.map(option => (
        <CafeFeedbackButton
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </CafeFeedbackButton>
      ))}

      {showReset && (
        <CafeFeedbackButton onClick={onReset} variant="reset">
          Reset
        </CafeFeedbackButton>
      )}
    </Container>
  );
};

CafeFeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  showReset: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default CafeFeedbackOptions;
