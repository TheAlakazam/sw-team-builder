import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/v2/',
  headers: {
    'accept': 'application/json',
  },
});

export const getAllBuildings = async () => {
  return axiosInstance.get('buildings');
};

