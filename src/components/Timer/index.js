import React from 'react';

const _contdownTimerCalculator = (timeProp) => {
	const time = new Date(timeProp);

	const ms = parseInt(time.getMilliseconds() / 10);
	const s = time.getSeconds();
	const m = time.getMinutes();
	const h = time.getHours();

	const milliseconds = ms < 10 ? `0${ms}` : ms;
	const seconds      = s < 10 ? `0${s}`: s;
	const minutes      = m < 10 ? `0${m}`: m;
	const hours        = h < 10 ? `0${h}`: h;

	return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export default function Timer ({ time }) {

	const date = _contdownTimerCalculator(time);

	// componentDidMount() {
	// 	const time = new Date(35000);
	// 	const date = this._contdownTimerCalculator(time);

	// 	this.setState({
	// 		time: new Date(time.getTime() - 11),
	// 		date
	// 	});

	// 	setInterval(this._updateTimers, 11);
	// }

	return <span> {date} </span>;
};