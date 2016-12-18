import React, {Component} from 'react';
import Nav from 'Nav';
import AddBox from 'AddBox';
class Main extends Component{
  render(){
    return (
      <div>
        <AddBox incr={3}/>
        <br/>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Main;
