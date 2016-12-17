import React, {Component} from 'react';
import Nav from 'Nav';
class Main extends Component{
  render(){
    return (
      <div>
        Main Component
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Main;
