import React, { Component } from 'react';
import CafeFeedbackOptions from 'components/CafeFeedback/CafeFeedbackOptions';
import CafeFeedbackStatistics from 'components/CafeFeedback/CafeFeedbackStatistics';
import CafeFeedbackTitle from 'components/CafeFeedback/CafeFeedbackTitle';
import CafeFeedbackNotification from 'components/CafeFeedback/CafeFeedbackNotification';
import { Container } from 'components/CafeFeedback/CafeFeedbackComponent/CafeFeedbackComponent.styled';

class CafeFeedbackComponent extends Component {
  state = { Good: 0, Neutral: 0, Bad: 0 };

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.Good + this.state.Neutral + this.state.Bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? `${Math.round((this.state.Good / total) * 100)}%` : '0%';
  };

  resetCafeFeedback = () => {
    this.setState({ Good: 0, Neutral: 0, Bad: 0 });
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <CafeFeedbackTitle title="Please leave feedback">
          <CafeFeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
            showReset={!!total}
            onReset={this.resetCafeFeedback}
          />
        </CafeFeedbackTitle>

        <CafeFeedbackTitle title="Statistics">
          {total ? (
            <CafeFeedbackStatistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <CafeFeedbackNotification message="There is no feedback"></CafeFeedbackNotification>
          )}
        </CafeFeedbackTitle>
      </Container>
    );
  }
}

export default CafeFeedbackComponent;
