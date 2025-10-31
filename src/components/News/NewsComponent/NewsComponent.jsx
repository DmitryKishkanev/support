import { useState, useEffect } from 'react';
import APIfetchArticles from 'components/News/APIfetchArticles';
import NewsSearchForm from 'components/News/NewsSearchForm';
import { NewsContainer } from 'components/News/NewsComponent/NewsComponent.styled';

export default function NewsComponent() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    // const fetchArticles = () => {
    //   setIsLoading(true);

    //   APIfetchArticles({ searchQuery: query, currentPage })
    //     .then(responseArticles => {
    //       setArticles(prevArticles => [...prevArticles, ...responseArticles]);
    //       // setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    //     })
    //     .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false));
    // };

    // fetchArticles();

    setIsLoading(true);

    APIfetchArticles({ searchQuery: query, currentPage })
      .then(responseArticles => {
        console.log('responseArticles:', responseArticles);
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        // setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [currentPage, query]);

  const loadMore = () => {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  };

  const onChangeQuery = query => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  return (
    <NewsContainer>
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
        <button type="button" onClick={loadMore}>
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
    </NewsContainer>
  );
}
