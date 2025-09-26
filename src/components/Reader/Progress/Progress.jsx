import PropTypes from 'prop-types';

const Progress = ({ currentPage, totalPages }) => {
  return (
    <p>
      {currentPage}/{totalPages}
    </p>
  );
};

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
