import axios from 'axios';

// axios.defaults.baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';
const baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post(`${baseURL}/materials`, values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get(`${baseURL}/materials`);
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(`${baseURL}/materials/${id}`);
  return response.data;
};

export const updateMaterial = async fields => {
  const response = await axios.put(`${baseURL}/materials/${fields.id}`, fields);
  return response.data;
};
