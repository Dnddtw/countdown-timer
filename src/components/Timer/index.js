import React from 'react';
import { string } from 'prop-types';

const Timer = ({ date }) => (<div> {date} </div>);

Timer.propTypes = {
	date: string.isRequired
};

export default Timer;