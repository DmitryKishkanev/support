import { Component } from 'react';
import VideoList from 'components/Player/VideoList';
import Player from 'components/Player/Player';
import videos from '@/videos.json';

class Example extends Component {
  state = { selectedVideo: null };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}

export default Example;
