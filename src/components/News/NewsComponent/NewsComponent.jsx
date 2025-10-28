import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from 'components/News/NewsSearchForm';

axios.defaults.headers.common['Authorization'] =
  '2354ed4e6c9240248dc3bb35bb0911ea';

const APIfetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};

export default function NewsComponent() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(1);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchArticles = ({ pageSize }) => {
      setIsLoading(true);

      APIfetchArticles({ searchQuery: query, currentPage, pageSize: pageSize })
        .then(responseArticles => {
          setArticles(prevArticles => [...prevArticles, ...responseArticles]);
          setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    fetchArticles(pageSize);

    // fetchArticles({ searchQuery: query, currentPage, pageSize })
    //   .then(responseArticles => {
    //     setArticles(prevArticles => [...prevArticles, ...responseArticles]);
    //     setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    //   })
    //   .catch(error => setError(error.message))
    //   .finally(() => setIsLoading(false));
  }, [currentPage, pageSize, query]);

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
    setPageSize(1);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  return (
    <>
      <h1>News</h1>

      <NewsSearchForm onSubmit={onChangeQuery} />

      {error && <h2>Ой ошибка, всё пропало!!!</h2>}

      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>

      {shouldRenderLoadMoreButton && (
        <button
          type="button"
          onClick={() => {
            setPageSize(prevPageSize => prevPageSize + 1);
          }}
        >
          Загрузить ещё
        </button>
      )}

      {isLoading && (
        <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
          Загружаем...{' '}
          <span
            aria-label="Иконка"
            role="img"
            style={{ fontSize: 32, marginLeft: 10 }}
          >
            🤞
          </span>
        </p>
      )}
    </>
  );
}
