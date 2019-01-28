import React from 'react';
import PropTypes from 'prop-types';
import { throws } from 'assert';

class App extends React.Component {
	state = {
		time: 3600000
	};

	componentDidMount() {
		setInterval(() => {
			const { time } = this.state;

			const milliseconds = parseInt(time % 1000 / 10);
			const seconds = parseInt(time / 1000 % 60);
			const minutes = parseInt(time / 60000 % 60);

			this.setState({
				time: time - 11,
				date: `${minutes} : ${seconds} : ${milliseconds}`
			})
		}, 11);
	}

	render() {
		return <div>{this.state.date}</div>
	}
}

export default App;