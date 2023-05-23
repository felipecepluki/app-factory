import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/550?api_key=9e64af840359b446c1630d4c101f8447

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
})

export default api;