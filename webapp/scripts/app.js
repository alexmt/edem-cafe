angular.module('controllers', []);
angular.module('constants', []);

var webApp = angular.module('webApp', [
  'constants',
  'controllers',
  'ngRoute']);

webApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl'
  }).when('/contacts', {
    templateUrl: 'views/contacts.html',
    controller: 'MainCtrl'
  }).when('/samples', {
    templateUrl: 'views/samples.html',
    controller: 'SamplesCtrl'
  })
}]);
