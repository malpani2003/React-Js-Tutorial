import React from "react";

function Hello(props){

    console.log(props);
    // Using JSX
    return (<h1>Hello {props.name} with age {props.age}</h1>)

    // Without JSX
    // return React.createElement("h1",{id:"hello",className:"bold"},"Hello Pranav")
}


export default Hello