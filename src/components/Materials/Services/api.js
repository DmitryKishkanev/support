import axios from 'axios';

// axios.defaults.baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';
const baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';

export const getMaterials = async signal => {
  // Необязательный параметр config для signal – прерывания fetch - запроса
  const config = { ...(signal && { signal }) };
  const response = await axios.get(`${baseURL}/materials`, config);
  return response.data;
};

export const addMaterial = async (values, signal) => {
  // Необязательный параметр config для signal – прерывания fetch - запроса
  const config = { ...(signal && { signal }) };
  const response = await axios.post(`${baseURL}/materials`, values, config);
  return response.data;
};

export const deleteMaterial = async (id, signal) => {
  // Необязательный параметр config для signal – прерывания fetch - запроса
  const config = { ...(signal && { signal }) };
  const response = await axios.delete(`${baseURL}/materials/${id}`, config);
  return response.data;
};

export const updateMaterial = async (fields, signal) => {
  // Необязательный параметр config для signal – прерывания fetch - запроса
  const config = { ...(signal && { signal }) };
  const response = await axios.put(
    `${baseURL}/materials/${fields.id}`,
    fields,
    config,
  );
  return response.data;
};
