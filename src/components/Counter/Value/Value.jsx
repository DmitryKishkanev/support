import React from 'react';
import PropTypes from 'prop-types';
import { ValueEl } from './Value.styled';

export const Value = ({ value }) => <ValueEl>{value}</ValueEl>;

Value.propTypes = {
  value: PropTypes.number.isRequired,
};
