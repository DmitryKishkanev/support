import { Component } from 'react';
import Controls from 'components/Reader/Controls';
import Progress from 'components/Reader/Progress';
import Publication from 'components/Reader/Publication';
import { ReaderComponentContainer } from 'components/Reader/ReaderComponent/ReaderComponent.styled';

const LS_KEY = 'reader_item_index';

class ReaderComponent extends Component {
  state = { index: 0 };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = this.props.items[index];

    return (
      <ReaderComponentContainer>
        <h1>Reader</h1>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChangr={this.changeIndex}
        />

        <Progress currentPage={index + 1} totalPages={totalItems} />

        <Publication item={currentItem} />
      </ReaderComponentContainer>
    );
  }
}

export default ReaderComponent;
