import axios from 'axios';

// const myKey = import.meta.env.VITE_TMDB_TOKEN;

// axios.defaults.headers.common['Authorization'] = `${myKey}`;

// const APIfetchArticles = ({
//   searchQuery = '',
//   currentPage = 1,
//   pageSize = 5,
// } = {}) => {
//   return axios
//     .get(
//       `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
//     )
//     .then(response => response.data.articles);
// };

export const APIfetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get('/api/articles', {
      params: { searchQuery, currentPage, pageSize },
    })
    .then(res => res.data);
};

export default APIfetchArticles;
