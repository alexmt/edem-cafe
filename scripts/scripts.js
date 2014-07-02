angular.module("controllers",[]),angular.module("constants",[]),angular.module("services",[]);var webApp=angular.module("webApp",["constants","services","controllers","ngRoute","angular-carousel"]);webApp.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/contacts",{templateUrl:"views/contacts.html",controller:"ContactsCtrl"}).when("/samples",{templateUrl:"views/samples.html",controller:"SamplesCtrl"}).when("/menu",{templateUrl:"views/menu.html",controller:"MenuCtrl"})}]),angular.module("controllers").controller("HomeCtrl",["$scope","CafeInfoService",function(a,b){b.loadHallsInfo().then(function(b){a.halls=b})}]),angular.module("controllers").controller("ContactsCtrl",["$scope","cafeInfo",function(a,b){a.info=b}]),angular.module("controllers").controller("SamplesCtrl",["$scope","menuInfo",function(a,b){a.isFullSizeVisible=!1,a.samples=b.workSamples,a.showFullSizeImage=function(b){a.fullSizeUrl=b,a.isFullSizeVisible=!0},a.hideFullSizeImage=function(){a.isFullSizeVisible=!1}}]),angular.module("controllers").controller("MenuCtrl",["$scope","CafeInfoService",function(a,b){b.loadMenu().then(function(b){a.menu=b})}]),angular.module("constants").constant("cafeInfo",{name:"Кафе Эдем",streetAddress:"ул. Токмаковская 81-2",cityAddress:"Россия, Оренбургская область, с. Илек",phone:"(+7) 35337 2 10 29",menuGoogleSpreadsheet:{id:"17P4iXdCmbMT1YU8FMobZW2nwzCp6culi3a46IX1dMUI",gridId:"od6"},hallsGoogleSpreadsheet:{id:"1AvGFvtHGsS9KI5IlbY99HZML_Z1TP1N9rkbbtcI8Wqc",gridId:"od6"}}).constant("menuInfo",{workSamples:[{thumbnailUrl:"399343037854_13.png",fullSizeUrl:"399343037854_0.png"},{thumbnailUrl:"399343038110_13.png",fullSizeUrl:"399343038110_0.png"},{thumbnailUrl:"399343038366_13.png",fullSizeUrl:"399343038366_0.png"},{thumbnailUrl:"399342576542_13.png",fullSizeUrl:"399342576542_0.png"},{thumbnailUrl:"399342577054_13.png",fullSizeUrl:"399342577054_0.png"},{thumbnailUrl:"399342577566_13.png",fullSizeUrl:"399342577566_0.png"},{thumbnailUrl:"399342578078_13.png",fullSizeUrl:"399342578078_0.png"},{thumbnailUrl:"399341977502_13.png",fullSizeUrl:"399341977502_0.png"},{thumbnailUrl:"399341977758_13.png",fullSizeUrl:"399341977758_0.png"},{thumbnailUrl:"399341978014_13.png",fullSizeUrl:"399341978014_0.png"},{thumbnailUrl:"399341978270_13.png",fullSizeUrl:"399341978270_0.png"},{thumbnailUrl:"399341978526_13.png",fullSizeUrl:"399341978526_0.png"},{thumbnailUrl:"399341978782_13.png",fullSizeUrl:"399341978782_0.png"},{thumbnailUrl:"399341979038_13.png",fullSizeUrl:"399341979038_0.png"},{thumbnailUrl:"399341979294_13.png",fullSizeUrl:"399341979294_0.png"},{thumbnailUrl:"399341979550_13.png",fullSizeUrl:"399341979550_0.png"},{thumbnailUrl:"399341979806_13.png",fullSizeUrl:"399341979806_0.png"},{thumbnailUrl:"399341980062_13.png",fullSizeUrl:"399341980062_0.png"},{thumbnailUrl:"399341980318_13.png",fullSizeUrl:"399341980318_0.png"},{thumbnailUrl:"399341980574_13.png",fullSizeUrl:"399341980574_0.png"}]}),angular.module("services").service("CafeInfoService",["$q","cafeInfo",function(a,b){function c(a,b,c){var d="https://spreadsheets.google.com/feeds/cells/"+a.id+"/"+a.gridId+"/public/values?alt=json-in-script&callback=?";$.getJSON(d,function(a){var d=[];for(var e in a.feed.entry){var f=a.feed.entry[e].gs$cell,g=d[f.row-1];g||(g={},d[f.row-1]=g);var h=b[f.col-1];g[h]=f.$t}c(d.slice(1))})}this.loadMenu=function(){var d=a.defer();return c(b.menuGoogleSpreadsheet,["name","description"],function(a){d.resolve(a)}),d.promise},this.loadHallsInfo=function(){var d=a.defer();return c(b.hallsGoogleSpreadsheet,["name","description","imgUrl"],function(a){d.resolve(a)}),d.promise}}]);