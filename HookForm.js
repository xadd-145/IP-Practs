import React, { useState } from 'react';

function HookForm(){
    const [name, setName] = useState({fistName: '',lastName: ''})
    return (
        <div class='Main'>
      <form>
        <label>FirstName: </label>
        <input 
        type='text' 
        value={name.firstName} 
        onChange={e => setName({ ...name, firstName: e.target.value})}>
        </input>
        <br></br>
        <label>LastName: </label>
        <input 
        type='text' 
        value={name.LastName} 
        onChange={e => setName({ ...name,lastName: e.target.value})}>
        </input>
        <p>Your Firstname is: {name.firstName}</p>
        <p>Your Lastname is: {name.lastName}</p>
        <p>{JSON.stringify(name)}</p>
      </form>
      </div>
    );
}

export default HookForm;
