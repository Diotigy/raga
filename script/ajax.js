document.addEventListener("DOMContentLoaded", function () {
  function fetchMovies() {
      let xhr = new XMLHttpRequest();
      let url = "movies.json"; 
      xhr.open("GET", url, true);    
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              let movies = JSON.parse(xhr.responseText);
              addMoviesSortedByLanguage(movies);
          }
      };
      xhr.send();
  }
  
  function addMoviesSortedByLanguage(movies) {
      const moviesContainer = document.getElementById('movies');
      moviesContainer.innerHTML = '';
      
      const groupedMovies = movies.reduce((groups, movie) => {
          groups[movie.language] = groups[movie.language] || [];
          groups[movie.language].push(movie);
          return groups;
      }, {});
      
      Object.keys(groupedMovies).sort().forEach(language => {
          const languageHeader = document.createElement('h2');
          languageHeader.textContent = language;
          languageHeader.style.color = '#f4f4f4';
          moviesContainer.appendChild(languageHeader);
          
          groupedMovies[language].forEach(movie => {
              const movieTile = document.createElement('div');
              movieTile.className = 'movie-tile';

              const movieImg = document.createElement('img');
              movieImg.src = movie.img;
              movieImg.alt = movie.title;
              movieImg.className = 'movie-img';

              const movieInfo = document.createElement('div');
              movieInfo.className = 'movie-info';

              const movieTitle = document.createElement('div');
              movieTitle.className = 'movie-title';
              movieTitle.textContent = movie.title;

              const movieLanguage = document.createElement('div');
              movieLanguage.className = 'movie-language';
              movieLanguage.textContent = movie.language;

              movieInfo.appendChild(movieTitle);
              movieInfo.appendChild(movieLanguage);
              movieTile.appendChild(movieImg);
              movieTile.appendChild(movieInfo);
              moviesContainer.appendChild(movieTile);
          });
      });
  }
  
  fetchMovies(); 
});
