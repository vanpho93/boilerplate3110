import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLoading: false, city: '', temp: 0}
  }
  changeCity(cityName, temp){
    this.state.city = cityName;
    this.state.temp = temp;
    this.setState(this.state);
  }
  toggle(){
    this.state.isLoading = !this.state.isLoading;
    this.setState(this.state);
  }
  render(){
    var {city, temp} = this.state;
    return (
      <div>
        <WeatherForm xuly={this.changeCity.bind(this)} xulyLoading={this.toggle.bind(this)}/>
        <WeatherMessage isLoading={this.state.isLoading}>{city + ' is now ' + temp}</WeatherMessage>
      </div>
    )
  }
}

module.exports = Weather;
