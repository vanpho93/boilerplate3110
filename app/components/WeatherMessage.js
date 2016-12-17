import React, {Component} from 'react'

class WeatherMessage extends Component{
  render(){
    var {children} = this.props;
    var xhtml = children.length < 10 ? <p></p>: <p>{children}</p>;
    var xhtml2 = this.props.isLoading? <p>Loading...</p>: xhtml;
    return (xhtml2);
  }
}

module.exports = WeatherMessage;
