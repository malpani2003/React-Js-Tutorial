import React from 'react'

function ChildComponents(props) {
    console.log(props)
  return (
    <div>
        <button onClick={()=>props.greethandler("child")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponents