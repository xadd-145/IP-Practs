//CONDITIONALRENDERING
//APP.JS
import logo from './logo.svg';
import './App.css';
import UserGreeting from './UserGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserGreeting />
      </header>
    </div>
  );
}

export default App;


//USERGREETING.JS
import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
  render() {
    //Method 1
    /*let message
    if (this.state.isLoggedIn) {
        return (
            message= <div>Welcome, Aditi!</div>
        )
    } else {
        return (
            message= <div>Welcome, Guest!</div>
        )
    }
    return <div>{message}</div>*/

    //Method 2-Ternary Operator
    return this.state.isLoggedIn ? (
    <div>Welcome, Aditi!</div> ) : (
    <div>Welcome, Guest!</div> )
  }
}

export default UserGreeting;

//RUN NPM START