import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props);
        this.state={
            isToggle:true
        }
    }
  changeToggle=(id)=>{
    console.log(id);
    this.setState({
        isToggle:!this.state.isToggle
    })

  }
  render() {
    return (
      <div>
        <button onClick={this.changeToggle("1234")} >{this.state.isToggle?"ON":"OFF"}</button>
      </div>
    )
  }
}

export default EventBind