'use strict';

angular.module('controllers').controller('MainCtrl', ['$scope', 'legalEntityInfo', 'menuInfo',
  function ($scope, legalEntityInfo, menuInfo) {
    $scope.info = legalEntityInfo;
    $scope.workSamples = menuInfo.workSamples;
  }]);
