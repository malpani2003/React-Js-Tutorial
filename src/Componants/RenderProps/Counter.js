import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            count:0
        }
      }
      incrCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
  render() {
    return (
      <div>
         {this.props.render(this.state.count,this.incrCount)}
      </div>
    )
  }
}

export default Counter