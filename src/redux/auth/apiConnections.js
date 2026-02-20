import axios from 'axios';

export const apiConnections = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

//  Запись/удаление token для всех последующих операций
const token = {
  set(token) {
    apiConnections.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    apiConnections.defaults.headers.common.Authorization = '';
  },
};

export const { set, unset } = token;

// axios.defaults.baseURL = 'https://connections-api.goit.global/';

// //  Запись/удаление token для всех последующих операций напрямую к axios
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const { set, unset } = token;
