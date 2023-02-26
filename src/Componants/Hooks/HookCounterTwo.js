import React, { useState } from 'react'

function HookCounterTwo() {
    const InitalCount=0;
    const [count,setCount]=useState(InitalCount);
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={()=>setCount(count-1)}>Dec Count</button>
        <button onClick={()=>setCount(count+1)}>Inc Count</button>
        <button onClick={()=>setCount(InitalCount)}>Reset Count</button>

    </div>
  )
}

export default HookCounterTwo