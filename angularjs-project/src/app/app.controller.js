angular.module('ottApp').controller('AppController', ['$scope', function($scope) {
    $scope.movies = [
        {
            img: "/assets/img/BreakingBad.jpg",
            title: "Breaking Bad",
            language: "English",
        },
        {
            img: "/assets/img/AlienRomulus.jpg",
            title: "AlienRomulus",
            language: "English",
        },
        {
            img: "/assets/img/BetterCallSaul.jpg",
            title: "Better Call Saul",
            language: "English",
        },
        {
            img: "/assets/img/Chernobyl.jpg",
            title: "Chernobyl",
            language: "English"
        },
        {
            img: "/assets/img/Cosmos.jpg",
            title: "Cosmos",
            language: "English"
        },
        {
            img: "/assets/img/DeathNote.jpg",
            title: "DeathNote",
            language: "Japanese"
        },
        {
            img: "/assets/img/ForestGump.jpg",
            title: "Forest Gump",
            language: "English"
        },
        {
            img: "/assets/img/Friends.jpg",
            title: "Friends",
            language: "English"
        },
        {
            img: "/assets/img/GameOfThrones.jpg",
            title: "Game Of Thrones",
            language: "English",
            genre: ""
        },
        {
            img: "/assets/img/GoodFellas.jpg",
            title: "Good Fellas",
            language: "English"
        },
        {
            img: "/assets/img/GravityFalls.jpg",
            title: "Gravity Falls",
            language: "English"
        },
        {
            img: "/assets/img/HunterXHunter.jpg",
            title: "Hunter X Hunter ",
            language: "Japanese"
        },
        {
            img: "/assets/img/Inception.jpg",
            title: "Inception",
            language: "English"
        },
        {
            img: "/assets/img/Interstellar.jpg",
            title: "Interstellar",
            language: "English"
        },
        {
            img: "/assets/img/LordOfTheRings.jpg",
            title: "Lord Of The Rings",
            language: "English"
        },
        {
            img: "/assets/img/Matrix.jpg",
            title: "Matrix",
            language: "English"
        },
        {
            img: "/assets/img/PulpFiction.jpg",
            title: "Pulp Fiction",
            language: "English"
        },
        {
            img: "/assets/img/SchindlersList.jpg",
            title: "Schindler's List",
            language: "English"
        },
        {
            img: "/assets/img/Seven.jpg",
            title: "Seven",
            language: "English"
        },
        {
            img: "/assets/img/ShawshankRedemption.jpg",
            title: "Shawshank Redemption",
            language: "English"
        },
        {
            img: "/assets/img/Smile2.jpg",
            title: "Smile 2",
            language: "English"
        },
        {
            img: "/assets/img/Terminator2.jpg",
            title: "Terminator 2",
            language: "English"
        },
        {
            img: "/assets/img/TheDarkKnight.jpg",
            title: "The Dark Knight",
            language: "English"
        },
        {
            img: "/assets/img/TheGodFather.jpg",
            title: "The God Father",
            language: "English"
        },
        {
            img: "/assets/img/TheOffice.jpg",
            title: "The Office",
            language: "English"
        },
        {
            img: "/assets/img/TheSubstance.jpg",
            title: "The Substance",
            language: "English"
        }
    ];

    $scope.getMoviesByLanguage = function() {
        return $scope.movies.reduce((groups, movie) => {
            groups[movie.language] = groups[movie.language] || [];
            groups[movie.language].push(movie);
            return groups;
        }, {});
    };

    $scope.fetchLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(position => {
                const { latitude, longitude } = position.coords;
                $scope.location = `Your current location: (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`;
                $scope.$apply();
            }, error => {
                $scope.location = 'Unable to retrieve your location.';
                $scope.$apply();
            });
        } else {
            $scope.location = 'Geolocation is not supported by this browser.';
            $scope.$apply();
        }
    };

    $scope.fetchLocation();
}]);