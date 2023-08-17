
import axios from 'axios';
import { BASE_API_URL } from '../configs/app.config';

// Interceptors can be optional : https://axios-http.com/docs/interceptors


export const API = () => {
  const axiosApiInstance = axios.create({
    baseURL: BASE_API_URL,
  });

  axiosApiInstance.interceptors.request.use(
    // Describes the configurations that should be applied every time we try to send a request
    (config) => {
      return config;
    },
    // Describes what should happen every time our request faces an error
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosApiInstance.interceptors.response.use(
    (response) => {
      // Describes what should happen every time API sends back a successful response (no error or warnings)
      if (response?.data.success) {
      }

      // Describes what should happen every time API sends back a warning
      if (response?.data.warning) {
      }

      // Any status code that lie within the range of 2xx cause this function to trigger
      return response;
    },
    (error) => {

      if (error?.response?.data) {
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      return Promise.reject(error);
    }
  );

  return axiosApiInstance;
};
