import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/students', // Adjust based on your route prefix
  withCredentials: true, // if using cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api; 

