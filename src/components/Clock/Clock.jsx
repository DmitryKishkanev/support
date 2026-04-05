import { Component } from 'react';
import { ClockFace } from 'components/Clock/Clock.styled';

class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <ClockFace>{this.state.time}</ClockFace>;
  }
}

export default Clock;
