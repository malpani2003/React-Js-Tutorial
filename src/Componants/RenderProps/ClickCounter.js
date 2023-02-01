import React, { Component } from 'react'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
      }
  render() {
    // console.log(this.state.count);  
    return (
    //   <div>ClickCounter</div>
    <button onClick={this.props.increment} > Click {this.props.count} times</button>
    )
  }
}

export default ClickCounter