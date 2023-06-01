import { Movie } from "./Movie/index.js";
console.log('JavaScript ve stránce funguje');


const movieList = document.querySelector("#movies");
const alphabet = document.querySelector("#alphabet");
const year = document.querySelector("#year");
fetch("https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies").then((response) => response.json()).then((data) => {
    const movies = data;
    alphabet.addEventListener("click", () => {
        movies.sort(function (a, b) {
            return a.title.localeCompare(b.title)
        });
        showMovies(movies)
    });
    year.addEventListener("click", () => {
        movies.sort(function (a, b) {
            if (a.year < b.year) {
                return -1;
            }
            if (a.year > b.year) {
                return 1;
            }
            return 0;
        });
        showMovies(movies)
    });
    showMovies(movies)
});


const showMovies = (movies) => {
    movieList.innerHTML = "";
    movies.forEach((movie) => {
        const movieElm = Movie(movie);
        movieList.innerHTML += movieElm;
    })
    }

const renderMovie = (movies) => {
    const moviesElm = document.querySelector("#movies");
    moviesElm.innerHTML = movies
        .map((movie) => {
        return `<div class="movie">
          <img class="movie__img" src="${movie.posterUrl}" alt="${movie.title}">
          <h2 class="movie__title">${movie.title}</h2>
          <p class="movie__year">${movie.year}</p>
          <p class="movie__genre">${movie.genres}</p>
        </div>`
    })
}


