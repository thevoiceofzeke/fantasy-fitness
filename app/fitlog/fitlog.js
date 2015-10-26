'use strict';

angular.module('myApp.fitlog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fitlog', {
    templateUrl: 'fitlog/fitlog.html',
    controller: 'FitLogController'
  });
}])

.controller('FitLogController', [function() {

}]);