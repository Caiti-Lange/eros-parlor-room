import axios from 'axios'
import client from '../api/client'

export async function fetchParlor() {
  const res = await client.get('/parlor')
  return res.data.data
}

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.erosparlorroom.app/v1'
})

client.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default client
