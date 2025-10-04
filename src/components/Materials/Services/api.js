import axios from 'axios';

axios.defaults.baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
