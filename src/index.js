import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RegistrationForm from './Componants/Forms/RegistrationForm';
import AxiosHttp from './Componants/HTTPS/AxiosHttp';
import HookCounter from './Componants/Hooks/HookCounter';
import HookCounterTwo from './Componants/Hooks/HookCounterTwo';
import ReducerTutorial from './Componants/Hooks/ReducerTutorial';
import EffectTutorial from './Componants/Hooks/EffectTutorial';
const ele=React.createElement("div",null,React.createElement("h1",null,"Welcome to Tutorial"))
const root = ReactDOM.createRoot(document.getElementById('root'));

let color_array=["Red","blue","green","pink","yellow"]
root.render(
  <div>
    <App />
    <RegistrationForm></RegistrationForm>
    {/* <AxiosHttp></AxiosHttp> */}
    <HookCounter></HookCounter>
    <HookCounterTwo></HookCounterTwo>
    <ReducerTutorial></ReducerTutorial>
    <EffectTutorial></EffectTutorial>


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