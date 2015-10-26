'use strict';

angular.module('myApp.matchup', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/matchup', {
            templateUrl: 'matchup/matchup.html',
            controller: 'MatchupController'
        });
    }])

    .controller('MatchupController', [function() {

    }]);