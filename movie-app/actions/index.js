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
  return new Promise((resolve, reject) => {
    movie.id = '' + (MOVIE_DATA.length + 1);
    MOVIE_DATA.push(movie);
    setTimeout(() => {
      resolve(MOVIE_DATA);
      // reject('have no movie data');
    }, 15);
  });
}

export const getMovieById = (id) => {
  return Axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data);

  // return new Promise((resolve) => {
  //   const movieIndex = MOVIE_DATA.findIndex(movie => movie.id === id);
  //   const movie = MOVIE_DATA[movieIndex];
  //   console.log('movie ', movie);
  //   setTimeout(() => { resolve(movie) }, 50);
  // })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      // reject('have no movie data');
    }, 15);
  });
}