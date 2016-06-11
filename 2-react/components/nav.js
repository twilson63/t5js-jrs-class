module.exports = React => props =>
  <div className="navbar navbar-default">
    <div className="container">
      <a href="#" className="brand">
        {props.title}
      </a>
    </div>
  </div>

///var React = require('react')

// module.exports = function (props) {
//   return <div className="navbar navbar-default">
//     Insert Nav Here
//   </div>
// }

// React.createElement('div', {
//   className:""}, 'text')
