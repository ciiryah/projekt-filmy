export const Movie = ({posterUrl, title, url, year, genres}) => {
    return `<div class="movie">
          <img class="movie__img" src="${posterUrl}" alt="${title}">
          <a href="${url}"><h2 class="movie__title">${title}</h2></a>
          <p class="movie__year">${year}</p>
          <p class="movie__genre">${genres.map((genre) => `${genre}`).join(", ")}</p>
        </div>`;
};