var React = require('react')
var ReactDOM = require('react-dom')

function App (props) {
  return <h1>Hello from a JSX Component</h1>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
