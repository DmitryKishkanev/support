import axios from 'axios';

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

export default APIfetchArticles;
