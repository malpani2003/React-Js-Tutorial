import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
  incrCount=()=>{
    this.setState({
        count:this.state.count+1
    },()=>{
        console.log("From CallBack",this.state.count);
    })
    console.log("Outside CallBack",this.state.count);
  }
  decCount=()=>{
    this.setState({
        count:(this.state.count-1)
    })
  }
  render() {
    return (
      <div>
       <h3>Count {this.state.count}</h3>
        <button onClick={this.incrCount}>Increase Count</button>
        <button onClick={this.decCount}>Decrese Count</button>

      </div>
    )
  }
}

export default Counter
