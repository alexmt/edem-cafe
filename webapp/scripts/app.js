angular.module('controllers', []);
angular.module('constants', []);
angular.module('services', []);

var webApp = angular.module('webApp', [
  'constants',
  'services',
  'controllers',
  'ngRoute',
  'angular-carousel']);

webApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  }).when('/contacts', {
    templateUrl: 'views/contacts.html',
    controller: 'ContactsCtrl'
  }).when('/samples', {
    templateUrl: 'views/samples.html',
    controller: 'SamplesCtrl'
  }).when('/menu', {
    templateUrl: 'views/menu.html',
    controller: 'MenuCtrl'
  });
}]);
