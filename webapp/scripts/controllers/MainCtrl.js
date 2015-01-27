'use strict';

angular.module('controllers').controller('MainCtrl', ['$scope', 'cafeInfo',
  function ($scope, cafeInfo) {
    $scope.reviewFormUrl = cafeInfo.reviewFormUrl;
  }]);