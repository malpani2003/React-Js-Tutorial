import React from 'react'
import { useState } from 'react'
function HookCounter() {
    const [count, setCount ] = useState(0);
    return (
        <div>
            <h1>React Hooks</h1>
            <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
    )
}

export default HookCounter