import React, {Component} from 'react';

class AddBox extends Component{
  constructor(props){
    super(props);
    this.state = {num: 0};
    this.inc = this.inc.bind(this);
  }
  inc(){
    this.setState({num: this.state.num + this.props.incr});
  }
  render(){
    return <button className="button" onClick={this.inc}>{this.state.num}</button>
  }
};

module.exports = AddBox;
