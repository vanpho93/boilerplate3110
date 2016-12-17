var React = require('react');
var Nav = require('Nav');
var Main = React.createClass({
  render(){
    return (
      <div>
        Main Component
        <Nav/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
