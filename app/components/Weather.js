var React = require('react');
var WeatherForm = require('./WeatherForm.js');
var WeatherMessage = require('./WeatherMessage.js');
var Weather = React.createClass({
  getInitialState(){
    return {city: '', temp: 0}
  },
  changeCity(cityName, temp){
    this.state.city = cityName;
    this.state.temp = temp;
    this.setState(this.state);
  },
  render(){
    var {city, temp} = this.state;
    return (
      <div>
        <WeatherForm xuly={this.changeCity}/>
        <WeatherMessage isLoading={this.state.isLoading}>{city + ' is now ' + temp}</WeatherMessage>
      </div>
    )
  }
});

module.exports = Weather;
