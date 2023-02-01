import React from 'react'

function FunctionClick() {

    function clickhandler(){
        alert("Button CLicked")
    }
  return (
    <div>
        <button onClick={clickhandler}>Click Me</button>
    </div>
  )
}
export default FunctionClick;