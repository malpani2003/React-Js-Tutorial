import React, { Component } from 'react'
import ChildComponents from './ChildComponents';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }
      this.greetParent=this.greetParent.bind(this);
    }
  greetParent(childName){
    console.log(this);
    alert("HEllo " + this.state.parentName +" From "+childName);
  }
  render() {
    return (
      <div>
        <ChildComponents greethandler={this.greetParent}></ChildComponents>
        
      </div>
    )
  }
}

export default ParentComponent