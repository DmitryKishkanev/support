import axios from 'axios';

// const myKey = import.meta.env.VITE_TMDB_TOKEN;

// axios.defaults.headers.common['Authorization'] = `${myKey}`;

// const APIfetchArticles = async ({
//   searchQuery = '',
//   currentPage = 1,
//   pageSize = 5,
//   signal,
// } = {}) => {
//   const response = await axios.get('https://newsapi.org/v2/everything', {
//     params: {
//       q: searchQuery,
//       pageSize,
//       page: currentPage,
//     },
//     signal,
//   });
//   return response.data.articles;
// };

export const APIfetchArticles = async ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
  signal,
} = {}) => {
  const response = await axios.get('/api/articles', {
    params: { searchQuery, currentPage, pageSize },
    signal,
  });
  return response.data;
};

export default APIfetchArticles;
