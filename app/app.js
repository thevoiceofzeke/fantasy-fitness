'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.fitlog',
  'myApp.matchup',
  'myApp.settings',
  'myApp.version',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.directive('header', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/header.html'
  }
})
.directive('navigation', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/navigation.html'
  }
})
.directive('footer', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/footer.html'
  }
});
