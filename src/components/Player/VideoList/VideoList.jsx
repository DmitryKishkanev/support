import PropTypes from 'prop-types';
import { VideosList } from 'components/Player/VideoList/VideoList.styled';

const VideoList = ({ videos, onSelect }) => {
  return (
    <VideosList>
      {videos.map(video => (
        <li key={video.id} onClick={() => onSelect(video.link)}>
          {video.link}
        </li>
      ))}
    </VideosList>
  );
};

VideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
  onSelect: PropTypes.func.isRequired,
};
export default VideoList;
