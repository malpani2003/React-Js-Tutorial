import React, { useEffect,useState} from 'react'
import axios from 'axios'

function EffectTutorial() {
    const [post,setPost]=useState("")
    useEffect(() => {
        // console.log("Hello World");
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => { 
            console.log(response.data); 
            setPost(response.data[0].title)})
        .catch((err) => console.log(err));
    },[]);
    return (
        <div>
            <h4>Api Calling using useEffect()</h4>
            <h5>{post}</h5>
        </div>
    )
}

export default EffectTutorial