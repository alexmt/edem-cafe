'use strict';

angular.module('controllers').controller('SamplesCtrl', ['$scope', 'menuInfo', function ($scope, menuInfo) {
  $scope.isFullSizeVisible = false;
  $scope.samples = menuInfo.workSamples;
  $scope.showFullSizeImage = function (url) {
    $scope.fullSizeUrl = url;
    $scope.isFullSizeVisible = true;
  };
  $scope.hideFullSizeImage = function() {
    $scope.isFullSizeVisible = false;
  }
}]);
