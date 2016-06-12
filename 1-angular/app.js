var angular = require('angular')

var minesweeper = require('minesweeper')

var ma = minesweeper.generateMineArray({
    rows: 10,
    cols: 10,
    mines: 15
})
var board = new minesweeper.Board(ma)


angular.module('app', [])
  .constant('board', board)
  .component('app', require('./components/app'))
  .component('boardComponent', require('./components/board'))
  .component('nav', require('./components/nav'))
