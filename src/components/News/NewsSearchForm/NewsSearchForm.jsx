import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewsSearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Искать</button>
    </form>
  );
}

NewsSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
