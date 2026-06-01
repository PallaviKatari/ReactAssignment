import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is a Class Component</h1>
        <ClassComponent1 />
      </div>
    );
  }
}

class ClassComponent1 extends Component {
  render() {
    return (
      <div>
        <h1>This is a Class Component1</h1>
        <FunctionalComponent3 />
      </div>
    );
  }
}

function FunctionalComponent3() {
  return (
    <div>
      <h1>This is a Functional Component3</h1>
      <ClassComponent2 />
    </div>
  );
}

class ClassComponent2 extends Component {
  render() {
    return (
      <div>
        <h1>This is a Class Component2</h1>
      </div>
    );
  }
}

export default ClassComponent;
