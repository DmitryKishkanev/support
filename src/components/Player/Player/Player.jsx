import { Component } from 'react';

import {
  PlayerWrapper,
  StyledPlayer,
} from 'components/Player/Player/Player.styled';

class Player extends Component {
  state = { isVideoLoaded: false };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    // const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <h2>Загружаем видео...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              src={url}
              //   url={url}
              //   width={playerSize}
              //   height={playerSize}
              onStart={() => {
                console.log('Видео готово!');
                this.setState({ isVideoLoaded: true });
              }}
              controls
              width="100%"
              height="100%"
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
