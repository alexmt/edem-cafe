'use strict';

angular.module('controllers').controller('MainCtrl', ['$scope', 'legalEntityInfo',
  function ($scope, legalEntityInfo) {
    $scope.info = legalEntityInfo;
  }]).controller('SamplesCtrl', ['$scope', 'menuInfo', function ($scope, menuInfo) {
  $scope.samples = menuInfo.workSamples;
}]);
