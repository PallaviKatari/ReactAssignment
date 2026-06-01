import React from "react";

//Catching Errors in Components
class CounterThatThrowsError extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  componentWillUnmount() {
    console.log("Counter has been unmounted!");
    // Output: Counter has been unmounted!
  }

  render() {
    if (this.state.count === 5) throw new Error("Crashed!");
    console.log("Rendered");
    return (
      <React.Fragment>
        <h1 style={{ marginTop: 100, marginBottom: 30 }}>
          Count: {this.state.count}
        </h1>
        <button onClick={this.increment} style={{ padding: 5, marginRight: 5 }}>
          +
        </button>
        <button onClick={this.decrement} style={{ padding: 5 }}>
          -
        </button>
      </React.Fragment>
    );
  }
}

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidMount() {
    console.log("Component has mounted.");
  }

  //static getDerivedStateFromError(error) for returning an updated state to allow a render of fallback UI.
  static getDerivedStateFromError(error) { //Crashed
    console.log("Error Detected")
    return {
      hasError: true,
      error: error, // Crashed
    };
  }

  //componentDidCatch(error, errorInfo) for logging error information to the console,
  //including a component stack tracing back to the source of the error.
  componentDidCatch(error) { //Crashed
    console.log("Error Caught");
    console.log(error.name + ": " + error.message);
    this.componentDidMount();
    // Output: Error: Crashed!
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ marginTop: 100 }}>
          <h1>Oh no! Something's gone wrong!</h1>
        </div>
      );
    }

    // If there is no error, render the children components as normal
    return (
      <div>
        <CounterThatThrowsError /> 
      </div>
    );
  }
}