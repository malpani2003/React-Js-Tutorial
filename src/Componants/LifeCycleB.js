import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Pranav"
      }
      console.log('Life Cycle B Constructor');
    }
  static getDerivedStateFromProps(props,state){
    console.log('Life Cycle B getDerivedStateFromProps');
    return null;
  }
  componentDidMount(){
    console.log("Life Cycle B componentDidMount")
  }
  
  shouldComponentUpdate(){
    console.log("Life Cycle B shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Life Cycle B getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("Life Cycle B componentDidUpdate");
  }

  render() {
    console.log("life cycle B render")
    return (
      <div>
        Life Cycle B
      </div>
    )
  }
}

export default LifeCycleB