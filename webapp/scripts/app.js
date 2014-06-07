angular.module('controllers', []);
angular.module('constants', []);
angular.module('services', []);

var webApp = angular.module('webApp', [
  'constants',
  'services',
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
  }).when('/menu', {
    templateUrl: 'views/menu.html',
    controller: 'MenuCtrl'
  });
}]);
