'use strict';

var codeDesignApp = angular.module('codeDesignApp', []);

codeDesignApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.header = "____________";
  $scope.content = "_________________________________ _______________________________________________ ___________________ _____________________ _____________________________________ _____________________________";
  $scope.links = [
    {url: "http://stanford.edu", name: "________"},
    {url: "http://berkeley.edu/", name: "________"},
    {url: "http://illinois.edu/", name: "________"}
  ];
  $scope.image = "/img/placeholder.gif"
}]);
