import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
class LiffeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Pranav"
      }
      console.log('Life Cycle A Constructor');
    }
  static getDerivedStateFromProps(props,state){
    console.log('Life Cycle A getDerivedStateFromProps');
    return null;
  }
  componentDidMount(){
    console.log("Life Cycle A componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("Life Cycle A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Life Cycle A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("Life Cycle A componentDidUpdate");
  }
  eventHandler=()=>{
    console.log("Life Cycle State Changes");
    this.setState({
        name:"Sameer"
    })
  }
  render() {
    console.log("life cycle a render")
    return (
      <div>
        Life Cycle A 
        <button onClick={this.eventHandler}>Click to Change Props</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LiffeCycleA