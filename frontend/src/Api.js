import axios from 'axios';

const BASE_URL = 'http://localhost:5055/api';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});