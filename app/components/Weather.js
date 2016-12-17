var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var Weather = React.createClass({
  getInitialState(){
    return {isLoading: false, city: '', temp: 0}
  },
  changeCity(cityName, temp){
    this.state.city = cityName;
    this.state.temp = temp;
    this.setState(this.state);
  },
  toggle(){
    this.state.isLoading = !this.state.isLoading;
    this.setState(this.state);
  },
  render(){
    var {city, temp} = this.state;
    return (
      <div>
        <WeatherForm xuly={this.changeCity} xulyLoading={this.toggle}/>
        <WeatherMessage isLoading={this.state.isLoading}>{city + ' is now ' + temp}</WeatherMessage>
      </div>
    )
  }
});

module.exports = Weather;
