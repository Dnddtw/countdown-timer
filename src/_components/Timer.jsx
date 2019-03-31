import React from 'react';
import PropTypes from 'prop-types';

import { contdownTimerCalculator } from '../_helpers/utils';

const propTypes = {
  time: PropTypes.number.isRequired,
};

const defaultProps = {};

const Timer = ({ time }) =>
  <span>{contdownTimerCalculator(time)}</span>;

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
