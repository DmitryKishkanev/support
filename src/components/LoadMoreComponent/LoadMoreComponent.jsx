import { useState, useEffect } from 'react';
import { LoadMoreComponentContainer } from 'components/LoadMoreComponent/LoadMoreComponent.styled';

const LoadMoreComponent = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  //   const [items, setItems] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.elements.query.value);
    // setItems([]);

    e.target.reset();
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    console.log(page);
    console.log(query);
  }, [page, query]);

  return (
    <LoadMoreComponentContainer>
      <h1>Load more component</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {query && <button onClick={loadMore}>Load more</button>}
    </LoadMoreComponentContainer>
  );
};

export default LoadMoreComponent;
