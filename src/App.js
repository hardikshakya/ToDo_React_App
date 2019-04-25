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
            completed: false
        },
        {
            id: 3,
            title: 'Meet friends',
            completed: false
        }
    ]
  }
  render(){
    // console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }  
}

export default App;
