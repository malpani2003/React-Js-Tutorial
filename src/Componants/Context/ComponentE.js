import React, { Component } from 'react'
import CopmentContext from './ComponentContext'
import ComponentF from './ComponentF'

class ComponentE extends Component {
 
//   static contextType=CopmentContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF></ComponentF>
      </div>
    )
  }
}

ComponentE.contextType=CopmentContext

export default ComponentE