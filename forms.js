//FORMS IN react
//APP.JS
import NameForm from './NameForm'
function App() {
    
  return (
    <div>
        <NameForm />
    </div>
  );
}

export default App;


//NAMEFORM.JS
import React from "react";
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    handleSubmit(event) {
        alert('Submitted Data=> Name: ' + this.input.current.value );
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" ref={this.input} />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default NameForm;


//DIFFERENT FORM
//App.JS
import React, {useState} from 'react';
import './App.css';

function App() {
	const [name , setName] = useState('');
	const [age , setAge] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');

	const handleChange =(e)=>{
	setName(e.target.value);
	}
	const handleAgeChange =(e)=>{
	setAge(e.target.value);
	}
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}
	const handleConfPasswordChange =(e)=>{
	setConfPassword(e.target.value);
	}
	const handleSubmit=(e)=>{
	if(password !== confPassword)
	{
		alert("password Not Match");
	}
	else{
		alert('A form was submitted with Name :"' + name +
		'" ,Age :"'+age +'" and Email :"' + email + '"');
	}
	e.preventDefault();
	}

    return (
	    <div className="App">
	        <form onSubmit={
                (e) => {handleSubmit(e)}
            }>
	        <h3> Sign-up Form </h3>
			<label>Name:</label><br/>
		    <input type="text" value={name} required onChange={
                (e)=> {handleChange(e)}
            } /><br/>
		    <label>Age:</label><br/>
		    <input type="text" value={age} required onChange={
                (e)=> {handleAgeChange(e)}
            } /><br/>
		    <label>Email:</label><br/>
		    <input type="email" value={email} required onChange={
                (e)=> {handleEmailChange(e)}
            } /><br/>
		    <label>Password:</label><br/>
		        <input type="password" value={password} required onChange={
                (e)=> {handlePasswordChange(e)}
            } /><br/>
		    <label>Confirm Password:</label><br/>
		    <input type="password" value={confPassword} required onChange={
                (e)=> {handleConfPasswordChange(e)}
            } /><br/>
            <input type="submit" value="Submit"/>
	    </form>
	</div>
    );
}

export default App;
