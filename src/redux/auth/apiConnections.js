import axios from 'axios';

export const apiConnections = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});
