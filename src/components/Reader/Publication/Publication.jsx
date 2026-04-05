import PropTypes from 'prop-types';
import {
  PublicationTitle,
  PublicationText,
} from 'components/Reader/Publication/Publication.styled';

const Publication = ({ item }) => {
  return (
    <article>
      <PublicationTitle>{item.title}</PublicationTitle>
      <PublicationText>{item.text}</PublicationText>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default Publication;
