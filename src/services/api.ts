// src/services/api.ts
import axios from 'axios'

// Axios instanca, ki jo lahko kjerkoli uvoziš
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // httpOnly cookie za JWT
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
