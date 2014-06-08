'use strict';

angular.module('controllers').controller('HomeCtrl', ['$scope', 'CafeInfoService',
  function ($scope, CafeInfoService) {
    CafeInfoService.loadHallsInfo().then(function(halls) {
      $scope.halls = halls;
    });
  }]);