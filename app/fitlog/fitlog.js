'use strict';

angular.module('myApp.fitlog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fitlog', {
    templateUrl: 'fitlog/fitlog.html',
    controller: 'FitLogController'
  });
}])

.controller('FitLogController', ['$scope', function($scope) {
  $scope.dates = getWeek();
  $scope.dateRange = [$scope.dates[0],$scope.dates[6]];

  // TODO: Replace hardcoded activities with a http.get from the database
  $scope.activitiesHourly = [
    {
      "category": 'High Intensity (Hours)',
      "description": 'Circuits, crossfit, spin class, sprints, HIIT, core exercises'
    },
    {
      "category": 'Low Intensity (Hours)',
      "description": 'Weightlifting, yoga, swimming'
    },
    {
      "category": 'Sports (Hours)',
      "description": 'Ultimate, goaltimate, soccer, basketball, rock climbing, downhill skiing, etc.'
    }
  ];
  $scope.activitiesIndividual = [
    {
      "category": 'Push-ups Completed',
      "description": 'Chest/shirt to ground. Push ups done from knees counts at 1/3 rate'
    },
    {
      "category": 'Pull-ups Completed',
      "description": 'Kipping counts at 1/3 rate'
    },
    {
      "category": 'Air Squats Completed',
      "description": 'Butt below knees'
    },
    {
      "category": 'Agility Ladder (Sets)',
      "description": ''
    },
    {
      "category": 'Running (Miles)',
      "description": ''
    },
    {
      "category": 'Swimming (Miles)',
      "description": ''
    },
    {
      "category": 'Cycling (Miles)',
      "description": ''
    },
    {
      "category": 'Rowing (Kilometers)',
      "description": ''
    }
  ];
  $scope.activitiesBonus = [
    {
      "category": 'Stretching Bonus',
      "description": 'Must stretch for at least 10 minutes. Practicing yoga also achieves this bonus. Record number of days (1-7)'
    },
    {
      "category": 'Head-to-Head',
      "description": 'Reserved for additional head-to-head challenge calculations'
    }
  ];

  function getWeek() {
    var today = new Date(),
    sun = today.getDate() - today.getDay(),
    mon = sun + 1,
    tue = sun + 2,
    wed = sun + 3,
    thu = sun + 4,
    fri = sun + 5,
    sat = sun + 6;
    return [
      new Date(today.setDate(sun)),
      new Date(today.setDate(mon)),
      new Date(today.setDate(tue)),
      new Date(today.setDate(wed)),
      new Date(today.setDate(thu)),
      new Date(today.setDate(fri)),
      new Date(today.setDate(sat))
    ];
  }
}]);