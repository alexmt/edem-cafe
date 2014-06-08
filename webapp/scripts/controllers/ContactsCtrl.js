'use strict';

angular.module('controllers').controller('ContactsCtrl', ['$scope', 'cafeInfo',
  function ($scope, cafeInfo) {
    $scope.info = cafeInfo;
  }]);