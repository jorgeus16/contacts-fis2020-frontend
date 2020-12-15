import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './Contacts.js';

function App() {

  const contacts = [
    {name:"Robert", phone:"6666"},
    {name:"Jorge",  phone:"5555"} 
];

  return (
    <div>
      <h1>Hello World</h1>
      <Contacts contacts={contacts}/>
    </div>
  );
}

export default App;
