import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '@/components/CafeFeedback/CafeFeedbackTitle/CafeFeedbackTitle.styled.js';

const CafeFeedbackTitle = ({ title, children }) => {
  return (
    <Title>
      {title}
      {children}
    </Title>
  );
};

CafeFeedbackTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CafeFeedbackTitle;
