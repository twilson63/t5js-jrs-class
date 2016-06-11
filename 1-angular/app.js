var angular = require('angular')

angular.module('app', [])
  .component('app', require('./components/app'))
  .component('boardComponent', require('./components/board'))
  .component('nav', require('./components/nav'))
