'use strict';

angular.module('services').service('CafeInfoService', ['$q', 'cafeInfo', function ($q, cafeInfo) {

  function loadSpreadsheet(spreadsheet, properties, callback) {
    var url = "https://spreadsheets.google.com/feeds/cells/" +
      spreadsheet.id + "/" + spreadsheet.gridId + "/public/values?alt=json-in-script&callback=?";
    $.getJSON(url, function(result) {
      var items = [];
      for (var i in result.feed.entry) {
        var cell = result.feed.entry[i].gs$cell;
        var item = items[cell.row - 1];
        if (!item) {
          item = {};
          items[cell.row -1] = item;
        }
        var property = properties[cell.col - 1];
        item[property] = cell.$t;
      }
      callback(items.slice(1));
    });
  }

  this.loadMenu = function() {
    var deferred = $q.defer();
    loadSpreadsheet(cafeInfo.menuGoogleSpreadsheet, ["name", "description"], function(menuItems) {
      deferred.resolve(menuItems);
    });
    return deferred.promise;
  };

  this.loadHallsInfo = function() {
    var deferred = $q.defer();
    loadSpreadsheet(cafeInfo.hallsGoogleSpreadsheet, ["name", "description", "imgUrl"], function(halls) {
      deferred.resolve(halls);
    });
    return deferred.promise;
  };
}]);