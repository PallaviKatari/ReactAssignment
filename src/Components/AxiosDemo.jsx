// Axios is a promise-based HTTP client for the browser and Node.js. It provides an easy-to-use API for making 
// HTTP requests and handling responses. Axios supports features like interceptors, request cancellation, 
// and automatic JSON data transformation, making it a popular choice for handling API calls in React applications.

import React from 'react';
//npm install axios
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  //Instead of fetch -> axios
  //axios - get,post,put,delete
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(res.data);
      })
  }

  render() {
    return (
      <>
        <ul style={{ color: 'blue', marginTop: 50, padding: 2 }}>
          {
            this.state.persons
              .map(person =>
                <li key={person.id}>{person.name}<br></br>{person.email}<hr></hr></li>
              )
          }
        </ul>
        <br></br>
        {/* <PersonAdd /> */}
      </>
    )
  }
}

class PersonAdd extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name</label><br></br><br></br>
          <input type="text" name="name" onChange={this.handleChange} style={{ borderRadius: 10, width: 300, borderBlockColor: 'black', marginLeft: 50, borderBlockStyle: 'solid' }} />
          <br></br>
          <button type="submit" style={{ borderRadius: 2}}>Add</button>
        </form>
      </div>
    )
  }
}