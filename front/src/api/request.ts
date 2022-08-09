import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8888'

const serve = axios.create({
  baseURL:baseUrl,
  timeout:20000,
})
serve.interceptors.response.use((res)=>{
  return res.data
})

export default serve