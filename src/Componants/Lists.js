import React from 'react'
import Personlist from './Personlist'
function Lists() {
  let names=["Pranav","Sameer","Sangeeta","Rajesh"]
const person=[
    {
        id:1,
        name:"Pranav Malpani",
        skill:"Node JS"
    },
    {
        id:2,
        name:"Harshit Arora",
        skill:"Python"
    },
    {
        id:3,
        name:"Shreyansh Goyal",
        skill:"c++"
    }
    ,{
      id:4,
      name:"Shreyansh Goyal",
      skill:"c"
  }
]
const personlist=person.map((value,index)=><Personlist name={value.name} skill={value.skill} key={index}></Personlist>)
  return (
    <div>{personlist}</div>
  )
}

export default Lists