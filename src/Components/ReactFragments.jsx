import React, { Component } from "react";

class ReactFragments extends Component {
  render() {
    return (
      <table style={{ color: 'blue', marginTop: 100, marginLeft: 400, padding: 2 }}>
        <thead>
          <tr>
            <Columns />
          </tr>
        </thead>
      </table>
    );
  }
}

//React Fragments - <> </>
class Columns extends Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}

export default ReactFragments;