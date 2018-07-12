import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
  // state = {users: []}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Users</h1>
  //       {this.state.users.map(user =>
  //         <div key={user.id}>{user.username}</div>
  //       )}
  //     </div>
  //   );
  // }
}

export default App;