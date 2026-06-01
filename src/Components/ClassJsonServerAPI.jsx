import {Component} from 'react';

class ClassJsonServerAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.state.todos.map(todo => {
            const statusColor = todo.status === 'completed'
              ? 'green'
              : todo.status === 'pending'
              ? 'orange'
              : todo.status === 'cancelled'
              ? 'red'
              : 'black';
            return (
              <li key={todo.id}>
                {todo.task} - <span style={{ backgroundColor: statusColor, color: 'white', padding: '2px 6px', borderRadius: '4px' }}>{todo.status}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ClassJsonServerAPI;