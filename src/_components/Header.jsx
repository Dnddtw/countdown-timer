import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  count: PropTypes.number.isRequired,
  addNewTimer: PropTypes.func,
  removeTimers: PropTypes.func,
};

const defaultProps = {
  addNewTimer: () => {},
  removeTimers: () => {},
};

const spanStyles = {
  display: 'inline-block',
  marginLeft: '20px',
};

const Header = ({ count, addNewTimer, removeTimers }) => (
  <div style={{ marginBottom: '20px' }}>
    <button type="button" onClick={removeTimers}>Remove all timers</button>
    <button type="button" onClick={addNewTimer}>New timer</button>
    <span style={spanStyles}>
      Timers count:
      {count}
    </span>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
