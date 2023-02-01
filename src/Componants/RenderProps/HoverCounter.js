import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
      }
  render() {
    // console.log(this.state.count);  
    return (
    //   <div>ClickCounter</div>
    <h2 onMouseOver={this.props.increment} > Hover {this.props.count} times</h2>
    )
  }
}

export default HoverCounter