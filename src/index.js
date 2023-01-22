import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Users  from './Componants/User';
import Persons from './Componants/Person/Persons.js';
import User_Card from './Componants/Exercise_User_Card'
import HexaDecimal_Generrtor from './Componants/HexaDecimal_Generrtor'
import axios from 'axios';
// JSX stands for JavaScript XML.
// JSX allows us to write HTML in React.\
// With JSX you can write expressions inside curly braces { }.
// The HTML code must be wrapped in ONE top level element.
const ele=React.createElement("div",null,React.createElement("h1",null,"Welcome to Tutorial"))
const root = ReactDOM.createRoot(document.getElementById('root'));

let color_array=["Red","blue","green","pink","yellow"]
root.render(
  <div>
    <App />
    <Users num="1"></Users>
    <Persons name="Pranav"></Persons>
    <Users num="2"></Users>
    <Persons name="Sameer"></Persons>
    <User_Card></User_Card>
    {/* <HexaDecimal_Generrtor color="pink"></HexaDecimal_Generrtor> */}
    {/* <HexaDecimal_Generrtor color="blue"></HexaDecimal_Generrtor> */}
    {/* <HexaDecimal_Generrtor color={color_array}></HexaDecimal_Generrtor> */}


  </div>
);

//################   PROPS
// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// React Props are like function arguments in JavaScript and attributes in HTML.
// The component receives the argument as a props object:
// React Props are read-only! You will get an error if you try to change their value.

// $$$$$$$$$$$$$$$$$$$$$$$ STATE
// The state object is where you store property values that belongs to the component.
// When the state object changes, the component re-renders.
// The state object is initialized in the constructor:
// Refer to the state object anywhere in the component by using the this.state.propertyname syntax:
// To change a value in the state object, use the this.setState() method.
// Always use the setState() method to change the state object