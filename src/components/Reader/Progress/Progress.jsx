import PropTypes from 'prop-types';
import { ProgressFigures } from 'components/Reader/Progress/Progress.styled';

const Progress = ({ currentPage, totalPages }) => {
  return (
    <ProgressFigures>
      {currentPage}/{totalPages}
    </ProgressFigures>
  );
};

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
