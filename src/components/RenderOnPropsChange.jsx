import React, { Component } from 'react';

export default class RenderOnPropsChange extends Component {
  render() {
    console.log("Render called", this.props.name);
    return (
      <>
        <h1>RenderOnPropsChange</h1>
        <h2>{this.props.name}</h2>
      </>
    );
  }
}