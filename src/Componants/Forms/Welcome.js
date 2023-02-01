import React from 'react'

function Welcome(props) {
  console.log(`Welcome ${props.name} to React JS Tutorial`);
  return (
    <div>
        <h1>Welcome {props.name} to React JS Tutorial</h1>
    </div>
  )
}

export default Welcome