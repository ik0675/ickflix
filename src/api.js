import axios from "axios";

/* Configuration for the instance */
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6cd7c01356b14b1bcfd51b6695e00d32",
    language: "en-US"
  }
});

/* '/' in front of tv will make a path to ab absolute path which will override the baseURL */

export const tvAPI = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airing: () => api.get("tv/airing_today"),
  detail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const movieAPI = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  detail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
