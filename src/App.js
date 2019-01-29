import React from 'react';
import Timer from './components/Timer';

class App extends React.Component {
	state = {
		time: new Date(3600000)
	};

	_contdownTimerHandler = () => {
		const { time } = this.state;

		const ms = parseInt(time.getMilliseconds() / 10);
		const s = time.getSeconds();
		const m = time.getMinutes();
		const h = time.getHours();

		const milliseconds = ms < 10 ? `0${ms}` : ms;
		const seconds      = s < 10 ? `0${s}`: s;
		const minutes      = m < 10 ? `0${m}`: m;
		const hours        = h < 10 ? `0${h}`: h;

		this.setState({
			time: new Date(time.getTime() - 11),
			date: `${hours}:${minutes}:${seconds}:${milliseconds}`
		});
	}

	componentDidMount() {
		setInterval(this._contdownTimerHandler, 11);
	}

	render() {
		const { date } = this.state;
		return (
			<div>
				<Timer date={date} />
			</div>
		);
	}
}

export default App;