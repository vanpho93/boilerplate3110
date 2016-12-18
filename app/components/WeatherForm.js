var React = require('react');

var WeatherForm = React.createClass({
  change(){
    this.props.xulyLoading();
    var cityName = this.refs.txtCity.value;
    var url = 'http://api.openweathermap.org/data/2.5/weather?appid=6793b567037402fc85cc563ee05470d2&units=metric&q='+cityName;
    this.refs.txtCity.value = "";
      var that = this;
      $.ajax({
        type: "GET",
        url: url,
        success(data){
          that.props.xulyLoading();
          that.props.xuly(cityName, data.main.temp);
        },
        error(a){
          that.props.xulyLoading();
          alert(a.responseJSON.message);
        }
      });
  },
  render(){
    return (
      <div>
        <input type="text" placeholder="Enter city name" ref="txtCity"/>
        <br/><br/>
        <button className="button" onClick={this.change}>Get weather</button>
      </div>
    )
  }
});

module.exports = WeatherForm;
