import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList } from 'components/CafeFeedback/CafeFeedbackStatistics/CafeFeedbackStatistics.styles';

const CafeFeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <p>Good:</p>
        <span>{good}</span>
      </li>
      <li>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </li>
      <li>
        <p>Bad: </p>
        <span>{bad}</span>
      </li>
      <li>
        <p>Total:</p>
        <span>{total}</span>
      </li>
      <li>
        <p>Positive feedback:</p>
        <span>{positivePercentage}</span>
      </li>
    </StatisticsList>
  );
};

CafeFeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default CafeFeedbackStatistics;
