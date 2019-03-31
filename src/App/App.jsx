import React, { Component } from 'react';

import Header from '../_components/Header';
import Timer from '../_components/Timer';
import { INITIAL_TIME } from '../_constants';

class App extends Component {
  state = {
    TimerArray: [],
  };

  componentDidMount() {
    setInterval(this.updateTimers, 11);
  }

  addNewTimer = () => {
    const { TimerArray } = this.state;

    if (TimerArray.length) {
      const [firstTime] = TimerArray;
      TimerArray.push(INITIAL_TIME - firstTime);
    } else {
      TimerArray.push(INITIAL_TIME);
    }

    this.setState({
      TimerArray,
    });
  }

  updateTimers = () => {
    const { TimerArray } = this.state;

    if (TimerArray.length) {
      TimerArray[0] -= 11;

      this.setState({
        TimerArray,
      });
    }
  };

  render() {
    const { TimerArray } = this.state;
    const firstTime = TimerArray[0];
    const timerCount = TimerArray.length;

    return (
      <div>
        <Header count={timerCount} addNewTimer={this.addNewTimer} />

        {TimerArray.map((value, index) => {
          const time = index ? firstTime + value : value;
          const key = `Timer-${index}`;

          return (
            <div key={key}>
              <Timer time={time} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
