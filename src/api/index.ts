import axios from 'axios';

const headersOpt = {};

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    ...headersOpt,
  },
});

export const requestInitialData = async (url = '') => axios.post(url)
  .then((res) => res.data)
  .catch((e) => {
    console.log(e);
  });

export default api;
