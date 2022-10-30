//STATES
//APP.JS
import Profile from './Profile'
function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;

//PROFILE.JS
import React from 'react'
class Profile extends React.Component {
  constructor(){
    super();
    this.state={
      name: 'Aditi',
      class: 'TE',
      count: 0
    }
  }
  updateState(){
    this.setState({
      name: 'Shubh',
      class: 'BE',
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
            <h1>Hello {this.state.name} !</h1>
            <h1>Class: {this.state.class}</h1>
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>{this.updateState()}}>Update</button>
      </div>
    );
  }
}

export default Profile;

//RUN NPM START
