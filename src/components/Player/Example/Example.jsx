import { Component } from 'react';
import VideoList from 'components/Player/VideoList';
import Player from 'components/Player/Player';
import videos from '@/videos.json';
import { SelectedVideoContainer } from 'components/Player/Example/Example.styled';

class Example extends Component {
  state = { selectedVideo: null };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <SelectedVideoContainer>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
      </SelectedVideoContainer>
    );
  }
}

export default Example;
