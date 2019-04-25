import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'
class App extends Component {
  state = {
    todos: [
        {
            id: 1,
            title: 'Book Show',
            completed: false
        },
        {
            id: 2,
            title: 'Place Order',
            completed: true
        },
        {
            id: 3,
            title: 'Meet friends',
            completed: false
        }
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  // delTodo = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  // }

  render(){
    // console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }  
}

export default App;
