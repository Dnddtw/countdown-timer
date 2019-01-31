import React, { Component } from 'react';
import Timer from './components/Timer';

class App extends Component {
	state = {
		TimerArray: []
	};

	_addNewTimer = () => {
		let { TimerArray } = this.state;
		TimerArray.push(1);
		this.setState({
			TimerArray: TimerArray
		}, () => (console.log(this.state.TimerArray.length)));
	}

	_updateTimers = () => {

	};

	componentDidMount() {
		// setInterval(this._updateTimers, 11);
	}

	render() {
		const { TimerArray } = this.state;
		return (
			<div>
				<button onClick={this._addNewTimer}>Add a new timer</button>
				{TimerArray.map((timer, index) => (<Timer key={index} updateTimers={this._updateTimers} />))}
			</div>
		);
	}
}

export default App;