import React, { PureComponent } from 'react';

export default class Timer extends PureComponent {
	state = {};

	_contdownTimerCalculator = (time) => {
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

	_updateTimers = () => {
		const { time } = this.state;
		this.setState({
			time: new Date(time.getTime() - 11),
			date: this._contdownTimerCalculator(time)
		});
	}	

	componentDidMount() {
		const time = new Date(35000);
		const date = this._contdownTimerCalculator(time);

		this.setState({
			time: new Date(time.getTime() - 11),
			date
		});

		setInterval(this._updateTimers, 11);
	}

	render() {
		const { date } = this.state;
		return <div> {date} </div>
	}
};