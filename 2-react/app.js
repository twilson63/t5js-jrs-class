var React = require('react')
var ReactDOM = require('react-dom')

var minesweeper = require('minesweeper')
var pin = require('linchpin')

var Nav = require('./components/nav')
var Board = require('./components/board')

var board
var title = 'minesweeper'

pin.on('newgame', function () {
  var ma = minesweeper.generateMineArray({
    rows: 10,
    cols: 10,
    mines: 15
  })

  board = new minesweeper.Board(ma)
  render()

})

pin.on('repaint', render)

pin.emit('newgame')

function render() {
  ReactDOM.render(
    <div>
      <Nav title={title} board={board}></Nav>
      <Board board={board}></Board>
    </div>,
    document.getElementById('app')
  )
}
