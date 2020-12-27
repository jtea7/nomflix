import axios from 'axios';

//기본Url과 Param을 동일하게 사용할 수 있도록 Axios Instance 생성
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '10923b261ba94d897ac6b81148314a3f',
    language: 'en-US',
  },
});

//api.get('tv/popular');

export default api;
