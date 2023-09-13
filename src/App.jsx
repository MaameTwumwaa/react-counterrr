import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      increasing: 0,
      decreasing: 100,
    };
  }

  handleIncrease = () => {
    this.setState({
      increasing: this.state.increasing + 1,
    });
  };
  handleDecrease = () => {
    this.setState({
      decreasing: this.state.decreasing - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.increasing}</h1>
        <button onClick={this.handleIncrease}> Add one</button>

        <h1>{this.state.decreasing}</h1>
        <button onClick={this.handleDecrease}>subtract one</button>
      </div>
    );
  }
}

export default App;
