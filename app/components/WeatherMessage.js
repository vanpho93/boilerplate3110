var React = require('react');

var WeatherMessage = React.createClass({
  render(){
    return (
      <p>{this.props.children}</p>
    )
  }
});

module.exports = WeatherMessage;
