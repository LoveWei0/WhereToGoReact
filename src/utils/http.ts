import axios from 'axios'

const http = axios.create({
  baseURL: '/rest',
  timeout: 6000
})

http.interceptors.request.use(config => {
  return config
})

http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
