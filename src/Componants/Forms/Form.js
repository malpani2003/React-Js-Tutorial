import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "name":" ",
         "text":" ",
         "skills":"Select"
      }
    }
  changeName=(event)=>{
    let inputType=event.target.type;
    console.log(inputType)
    if(inputType=='text'){
        this.setState({
            name:event.target.value
        })
    }
    else if(inputType=='select-one'){
        this.setState({
            skills:event.target.value
        })
    }
    else{
        this.setState({
            text:event.target.value
        })
    }
  }
  formSubmit=(event)=>{
    alert(`${this.state.name} with ${this.state.skills}`)
    event.preventDefault();
  }
//   changeText=(event)=>{
//     this.setState({
//         text:event.target.value
//     })
//   }
  render() {
    return (
      <div>
        <h4>Form Componants</h4>
        <form onSubmit={this.formSubmit}>
            <label>User Name : </label>
            <input type="text" value={this.state.name} onChange={this.changeName} name="name" id='name'/>
            <br></br>
            <br></br>
            <label>Message : </label>
            <textarea rows="10" cols="20" value={this.state.text} onChange={this.changeName}></textarea>
            <br></br>
            <br></br>
            <label>Select Skills : </label>
            <select value={this.state.skills} onChange={this.changeName}>
                <option value="Select"> .. Choose one Skill .. </option>
                <option value="React">React</option>
                <option value="Node">Node Js</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>

            </select>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
