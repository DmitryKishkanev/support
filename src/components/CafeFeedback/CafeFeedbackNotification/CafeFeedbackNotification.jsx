import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from './CafeFeedbackNotification.styled';

const CafeFeedbackNotification = ({ message }) => {
  return <Notification>{message}</Notification>;
};

CafeFeedbackNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CafeFeedbackNotification;
