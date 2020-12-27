import axios from 'axios';

//기본Url과 Param을 동일하게 사용할 수 있도록 Axios Instance 생성
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '10923b261ba94d897ac6b81148314a3f',
    language: 'en-US',
  },
});
//테스트코드
//api.get('tv/popular');

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
