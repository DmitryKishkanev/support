import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  LoaderTitle,
  PlayerWrapper,
  StyledPlayer,
} from 'components/Player/Player/Player.styled';

class Player extends Component {
  state = { isVideoLoaded: false };

  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  static componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <LoaderTitle>Загружаем видео...</LoaderTitle>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              src={url}
              width={playerSize}
              height={playerSize}
              onStart={() => {
                this.setState({ isVideoLoaded: true });
              }}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
