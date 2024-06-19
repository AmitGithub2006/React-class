import React, { Component } from "react";

export default class Mounting extends Component {
  componentDidMount() {
    console.log("Component Did Mount called");
    
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  static getDerivedStateFromProps() {
    console.log("Get Derived State From Props called");
    return null;
  }

  render() {
    console.log("Render called");
    return (
      <>
        <h1>Mounting Component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
      </>
    );
  }

  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      count: 0,
    };
  }
}