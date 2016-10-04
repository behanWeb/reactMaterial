import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <button ClassName={this.props.rmClass}></button>
    );
  }
}
