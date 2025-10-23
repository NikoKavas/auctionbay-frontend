// src/services/api.ts
import axios from 'axios'

// Axios instanca, ki jo lahko kjerkoli uvoziš
const api = axios.create({
  baseURL: import.meta.env.DEV
    ? 'http://localhost:3000'
    : '/api',
  withCredentials: true, // httpOnly cookie za JWT
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
