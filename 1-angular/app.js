var angular = require('angular')

angular.module('app', [])
  .component('app', {
    template: '<h1>{{title}}</h1>',
    controller: function ($scope) {
      $scope.title = 'Welcome to components'
    }
  })
