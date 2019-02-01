import React, { Component } from 'react';
import Timer from './components/Timer';

class App extends Component {
	INITIAL_TIME = 35000;
	state = {
		TimerArray: []
	};

	_addNewTimer = () => {
		const { TimerArray } = this.state;

		if (TimerArray.length) {
			const [ firstTime ] = TimerArray;
			TimerArray.push(this.INITIAL_TIME - firstTime);
		} else {
			TimerArray.push(this.INITIAL_TIME);
		}

		this.setState({
			TimerArray: TimerArray
		});
	}

	_updateTimers = () => {
		const { TimerArray } = this.state;

		if (TimerArray.length) {
			TimerArray[0] = TimerArray[0] - 11;

			this.setState({
				TimerArray
			});
		}
	};

	componentDidMount() {
		setInterval(this._updateTimers, 11);
	}

	render() {
		const { TimerArray } = this.state;
		const firstTime = TimerArray[0];
		return (
			<div>
				<button onClick={this._addNewTimer}>Add a new timer</button>
				{TimerArray.map((value, index) => {
					const time = index ? firstTime + value : value;
					return (
						<div key={index}>
							{index + 1}: <Timer time={time} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;