angular.module('ottApp', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });