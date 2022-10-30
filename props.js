//PROPS
//App.js
import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Props in React</h1>
        <Profile name="Aditi" class="TE" />
        <Profile name="Shubh" class="BE" />
      </header>
    </div>
  );
}

export default App;


//Profile.js
import React from 'react'
//Functional Props
/*function Profile(prop) {
  return (
    <div>
      <h3>{prop.name}</h3>
      <h4>{prop.class}</h4>
    </div>
  )
}
export default Profile;*/

//Class props
class Profile extends React.Component {
  render() {
    return (
      <div>
            <h3>{this.props.name}</h3>
            <h4>{this.props.class}</h4>
      </div>
    );
  }
}

export default Profile;

//RUN NPM START