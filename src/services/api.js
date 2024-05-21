import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=28a20961c584e2ce2ad03be12c00c1b2&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;