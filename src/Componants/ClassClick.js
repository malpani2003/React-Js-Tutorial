import React, { Component } from 'react'

class ClassClick extends Component {

  ClassClick=()=>{
    alert("Class COmponent button CLick");
  }
  render() {
    return (
      <div>
        <button onClick={this.ClassClick}>Class Click Component</button>
      </div>
    )
  }
}

export default ClassClick