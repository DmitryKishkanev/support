import { useState } from 'react';
import PropTypes from 'prop-types';
import { NewsForm } from './NewsSearchForm.styled';

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
    <NewsForm onSubmit={handleSubmit}>
      <h1>News</h1>
      <div>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </div>
    </NewsForm>
  );
}

NewsSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
