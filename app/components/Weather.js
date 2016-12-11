var React = require('react');
var WeatherForm = require('./WeatherForm.js');
var WeatherMessage = require('./WeatherMessage.js');
var Weather = React.createClass({
  getInitialState(){
    return {city: 'Hanoi', temp: 30}
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
        <WeatherMessage>{city + ' is now ' + temp}</WeatherMessage>
      </div>
    )
  }
});

module.exports = Weather;
