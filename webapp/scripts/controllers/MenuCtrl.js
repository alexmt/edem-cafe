'use strict';

angular.module('controllers').controller('MenuCtrl', ['$scope', 'CafeInfoService',
  function ($scope, CafeInfoService) {
    CafeInfoService.loadMenu().then(function(menu) {
      $scope.menu = menu;
    });
  }]);
