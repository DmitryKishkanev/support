import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TabsBox, ItamsBox, ContentBox } from 'components/Tabs/Tabs.styled';

class Tabs extends PureComponent {
  state = { activeTabIdx: 0 };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <TabsBox>
        <h1>Tabs</h1>
        <ItamsBox>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </ItamsBox>

        <ContentBox>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </ContentBox>
      </TabsBox>
    );
  }
}

export default Tabs;
