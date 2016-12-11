var React = require('react');

var WeatherForm = React.createClass({
  change(){
    var cityName = this.refs.txtCity.value;
    this.refs.txtCity.value = "";
    this.props.xuly(cityName);
  },
  render(){
    return (
      <div>
        <input type="text" placeholder="Enter city name" ref="txtCity"/>
        <br/><br/>
        <button onClick={this.change}>Get weather</button>
      </div>
    )
  }
});

module.exports = WeatherForm;
