		const movies = [
			{
				
				img: "/webTech/FSD/asset/img/BreakingBad.jpg",
				title: "Breaking Bad",
				language: "English",
			},
			{
				img: "/webTech/FSD/asset/img/AlienRomulus.jpg",
				title: "AlienRomulus",
				language: "English",
			},
			{
				img: "/webTech/FSD/asset/img/BetterCallSaul.jpg",
				title: "Better Call Saul",
				language: "English",
			},
			{
				img: "/webTech/FSD/asset/img/Chernobyl.jpg",
				title: "Chernobyl",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Cosmos.jpg",
				title: "Cosmos",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/DeathNote.jpg",
				title: "DeathNote",
				language: "Japanese"
			},
			{
				img: "/webTech/FSD/asset/img/ForestGump.jpg",
				title: "Forest Gump",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Friends.jpg",
				title: "Friends",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/GameOfThrones.jpg",
				title: "Game Of Thrones",
				language: "English",
				genre: ""
			},
			{
				img: "/webTech/FSD/asset/img/GoodFellas.jpg",
				title: "Good Fellas",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/GravityFalls.jpg",
				title: "Gravity Falls",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/HunterXHunter.jpg",
				title: "Hunter X Hunter ",
				language: "Japanese"
			},
			{
				img: "/webTech/FSD/asset/img/Inception.jpg",
				title: "Inception",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Interstellar.jpg",
				title: "Interstellar",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/LordOfTheRings.jpg",
				title: "Lord Of The Rings",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Matrix.jpg",
				title: "Matrix",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/PulpFiction.jpg",
				title: "Pulp Fiction",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/SchindlersList.jpg",
				title: "Schindler's List",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Seven.jpg",
				title: "Seven",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/ShawshankRedemption.jpg",
				title: "Shawshank Redemption",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Smile2.jpg",
				title: "Smile 2",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/Terminator2.jpg",
				title: "Terminator 2",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/TheDarkKnight.jpg",
				title: "The Dark Knight",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/TheGodFather.jpg",
				title: "The God Father",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/TheOffice.jpg",
				title: "The Office",
				language: "English"
			},
			{
				img: "/webTech/FSD/asset/img/TheSubstance.jpg",
				title: "The Substance",
				language: "English"
			}
		];

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

		// function fetchLocation() {
		//     // Demo location coordinates
		//     const demoLocation = { latitude: 12.9716, longitude: 77.5946 }; // Example: Bangalore, India

		//     const locationElement = document.getElementById('location');
		//     const { latitude, longitude } = demoLocation;

		//     if (latitude >= 0 && longitude >= 0) { // Replace with your actual home/college logic
		//         locationElement.textContent = 'You are at Home (Demo Location)';
		//     } else {
		//         locationElement.textContent = 'You are at College (Demo Location)';
		//     }

		function initMap(latitude, longitude) {
			const map = L.map('map').setView([latitude, longitude], 13);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 19,
			}).addTo(map);

			L.marker([latitude, longitude]).addTo(map)
				.bindPopup('You are here!')
				.openPopup();
		}

		function fetchLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.watchPosition(position => {
					const { latitude, longitude } = position.coords;
					document.getElementById('location').textContent = `Your current location: (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;

					initMap(latitude, longitude);
				}, error => {
					document.getElementById('location').textContent = 'Unable to retrieve your location.';
				});
			} else {
				document.getElementById('location').textContent = 'Geolocation is not supported by this browser.';
			}
		}

		addMoviesSortedByLanguage(movies);
		fetchLocation();
		addMoviesSortedByLanguage(movies);