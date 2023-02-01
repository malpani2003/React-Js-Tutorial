import React from 'react'

function Col() {
  const Skill=["React","Node","Js","Python"]
  const space={
    "marginLeft":"10px"
  }
  const Skilllist=Skill.map((items,index)=><td key={index} className={space}>{items}</td>)
  return (
    <React.Fragment>
    {
     Skilllist  
    }
    </React.Fragment>
  )
}

export default Col