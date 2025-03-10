angular.module('ottApp').component('movieList', {
    template: `
        <div class="container">
            <nav class="nav">
                <div class="logo">
                    <a href="index.html"><img src="/asset/icon/logo.png" alt="Logo"></a>
                </div>
                <ul class="navbar-list">
                    <li><a href="#movies">MOVIES</a></li>
                    <li><a href="#tvshows">TV SHOWS</a></li>
                    <li><a href="#search"><i class="search-icon">🔍</i></a></li>
                </ul>
                <a href="profile.html">
                    <img src="/webTech/FSD/asset/icon/profile-icon.png" alt="Profile" class="profile-icon">
                </a>
            </nav>
            <div id="movies">
                <h2 ng-repeat="(language, movies) in $ctrl.groupedMovies">{{ language }}</h2>
                <div ng-repeat="movie in movies" class="movie-tile">
                    <img ng-src="{{ movie.img }}" alt="{{ movie.title }}" class="movie-img">
                    <div class="movie-info">
                        <a class="movie-title" ng-href="movie.html?title={{ movie.title }}">{{ movie.title }}</a>
                        <div class="movie-language">{{ movie.language }}</div>
                    </div>
                </div>
            </div>
            <div id="location">{{ $ctrl.locationMessage }}</div>
            <div id="map"></div>
        </div>
    `,
    controller: function() {
        const vm = this;

        vm.movies = [
            // Movie data goes here
        ];

        vm.groupedMovies = vm.movies.reduce((groups, movie) => {
            groups[movie.language] = groups[movie.language] || [];
            groups[movie.language].push(movie);
            return groups;
        }, {});

        vm.locationMessage = 'Fetching your location...';

        vm.initMap = function(latitude, longitude) {
            const map = L.map('map').setView([latitude, longitude], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('You are here!')
                .openPopup();
        };

        vm.fetchLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(position => {
                    const { latitude, longitude } = position.coords;
                    vm.locationMessage = `Your current location: (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
                    vm.initMap(latitude, longitude);
                }, error => {
                    vm.locationMessage = 'Unable to retrieve your location.';
                });
            } else {
                vm.locationMessage = 'Geolocation is not supported by this browser.';
            }
        };

        vm.fetchLocation();
    }
});