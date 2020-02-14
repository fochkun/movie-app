// import axios from 'axios';
import Axios from 'axios';

const BASE_URL = 'http://localhost:3000';

let MOVIE_DATA = [
];

const CATEGORY_DATA = [
  { id: '1', name: 'drama' },
  { id: '2', name: 'action' },
  { id: '3', name: 'adventure' },
  { id: '4', name: 'historical' },
];

export const getMovies = () => {
  return Axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
}

export const createMovie = (movie) => {
  movie.id = Math.random().toString(32).substr(2,5);
  return Axios.post(`${BASE_URL}/api/v1/movies`,movie).then(res=>res.data);
}

export const getMovieById = (id) => {
  return Axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data);
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      // reject('have no movie data');
    }, 15);
  });
}

export const deleteMovie = (id) => {
  return Axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data);
}

export const updateMovie = (movie) => {
  return Axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`,movie).then(res=>res.data);
}