import axios from 'axios';

export const apiConnections = axios.create({
  baseURL: 'https://68dfdefa93207c4b4793043b.mockapi.io/',
});
