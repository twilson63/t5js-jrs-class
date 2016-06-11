var React = require('react')
var ReactDOM = require('react-dom')

var Nav = require('./components/nav')(React)

//var Nav = require('./components/nav')
var Board = require('./components/board')

function App (props) {
  return <div>
    <Nav title={props.title}></Nav>
    <Board></Board>
  </div>
}

ReactDOM.render(
  <App title="Minesweeper"/>,
  document.getElementById('app')
)
