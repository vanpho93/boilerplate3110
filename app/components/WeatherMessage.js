var React = require('react');

var WeatherMessage = React.createClass({
  getInitialState(){
    that = this;
    return {isLoading: false};
  },
  render(){
    var {children} = this.props;
    var xhtml = children.length < 10 ? <p></p>: <p>{children}</p>;
    var xhtml2 = this.state.isLoading? <p>Loading...</p>: xhtml;
    return (xhtml2);
  }
});

module.exports = WeatherMessage;
