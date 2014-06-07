'use strict';

angular.module('controllers').controller('MenuCtrl', ['$scope', 'MenuService',
  function ($scope, MenuService) {
    MenuService.loadMenu().then(function(menu) {
      $scope.menu = menu;
    });
  }]);
