import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, children }) => {
  return (
    <h1>
      {title}
      {children}
    </h1>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Title;
