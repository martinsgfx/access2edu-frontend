import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.221.58.220:3000/', // Adjust based on your route prefix
  withCredentials: true, // if using cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 

