import axios from 'axios';

// axios.defaults.baseURL = 'https://68dfdefa93207c4b4793043b.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post(
    'https://68dfdefa93207c4b4793043b.mockapi.io/materials',
    values,
  );
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get(
    'https://68dfdefa93207c4b4793043b.mockapi.io/materials',
  );
  return response.data;
};

export const deleteMaterial = async id => {
  const response = await axios.delete(
    `https://68dfdefa93207c4b4793043b.mockapi.io/materials/${id}`,
  );
  return response.data;
};

export const updateMaterial = async fields => {
  const response = await axios.put(
    `https://68dfdefa93207c4b4793043b.mockapi.io/materials/${fields.id}`,
    fields,
  );
  return response.data;
};
