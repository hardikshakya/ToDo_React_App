import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
class App extends Component {
  state = {
    todos: [
        {
            id: uuid.v4(),
            title: 'Book Show',
            completed: false
        },
        {
            id: uuid.v4(),
            title: 'Place Order',
            completed: false
        },
        {
            id: uuid.v4(),
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
  delTodo = (id) => {
    // console.log(id);
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })); //... is a spread operator
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    
  }

  // Add Todo
  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title,
    //   completed: false
    // })
    //   .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

  }

  render(){
    // console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />        
        </div>
        
      </div>
    );
  }  
}

export default App;
