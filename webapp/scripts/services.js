'use strict';

angular.module('services').service('MenuService', ['$q', 'cafeInfo', function ($q, cafeInfo) {
  this.loadMenu = function() {
    var deferred = $q.defer();
    var url = "https://spreadsheets.google.com/feeds/cells/" +
      cafeInfo.menuGoogleSpreadsheetId +
      "/od6/public/values?alt=json-in-script&callback=?";
    $.getJSON(url, function(result) {
      var properties = ["name", "description"];
      var menu = [];
      for (var i in result.feed.entry) {
        var cell = result.feed.entry[i].gs$cell;
        var menuItem = menu[cell.row - 1];
        if (!menuItem) {
          menuItem = {};
          menu[cell.row -1] = menuItem;
        }
        var property = properties[cell.col - 1];
        menuItem[property] = cell.$t;
      }
      deferred.resolve(menu.slice(1));
    });
    return deferred.promise;
  }
}]);