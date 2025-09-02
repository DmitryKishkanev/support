import React, { Component } from 'react';
import FeedbackOptions from 'components/CafeFeedback/FeedbackOptions';
import Statistics from 'components/CafeFeedback/Statistics';
import Title from 'components/CafeFeedback/Title';
import { Container } from 'components/CafeFeedback/CafeFeedbackComponent/CafeFeedbackComponent.styled';

class CafeFeedbackComponent extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? `${Math.round((this.state.good / total) * 100)}%` : '0%';
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Title title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Title>

        <Title title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Title>
      </Container>
    );
  }
}

export default CafeFeedbackComponent;
