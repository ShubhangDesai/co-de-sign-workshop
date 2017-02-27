'use strict';

var codeDesignApp = angular.module('codeDesignApp', []);

codeDesignApp.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = "Hello, world!";
  $scope.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros nulla, blandit sed tincidunt vitae, blandit id metus. Vestibulum ultrices ligula ligula, in suscipit metus porttitor a.";
  $scope.links = [
    {url: "http://stanford.edu", name: "Cool Kids"},
    {url: "http://berkeley.edu/", name: "Losers"}
  ];
  $scope.image = "/img/md.jpg"
  $scope.image2 = "/img/happiness.png"
}]);
