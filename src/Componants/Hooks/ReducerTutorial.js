import React, { useReducer } from 'react'

// state 
// action -
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1,ShowText:state.ShowText};
        case 'ToggleShowText':
            return {count:state.count,ShowText:!state.ShowText};
        default:
            return state

    }

}
function ReducerTutorial() {
    //   const [count,setCount]=useState(0);
    //   const [ShowText,setShowtext]=useState(true);

    const [state, dispatch] = useReducer(reducer,{count:0,ShowText:true});

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=> 
                {dispatch({type:"INCREMENT"});
                dispatch({type:"ToggleShowText"});}}>CLick Here</button>

            {state.ShowText ? "This is Text" : ""}
        </div>
    )
}

export default ReducerTutorial