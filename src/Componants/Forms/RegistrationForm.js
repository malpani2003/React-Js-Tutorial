import React, { Component } from 'react'
// import Welcome from './Welcome'
import Welcome from './Welcome'
import styled from 'styled-components'
// import Welcome from './Welcome'
const StyleBtn = styled.button`
    display:block;
    background-color:orange;
    padding:2px;
    width:10%;
    margin-top:10px
`;
class RegistrationForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isRegister:false,
         name:null,
         email:null,
         password:null,
         isVisible:false
      }
    }
    formChangeHandler=(event)=>{
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        })
        // const name=event.target.name.value
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(`Name is ${this.state.name} with EMail is ${this.state.email} and password ${this.state.password}`);
        this.setState({
            isRegister:true
        })

    }
  render() {
    if(this.state.isRegister){
        <Welcome user={this.state.name}></Welcome>
        // console.log("HI");
    }
    else{
        return (
            <div>

        <form className='container card p-2 my-2' onSubmit={this.submitHandler}>
        <h1 className='text-center my-2'>Registration Form</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti aliquam facilis quas suscipit reprehenderit illo eum odio, earum accusantium. Nemo minima eligendi placeat iure expedita accusamus quas itaque odio?</p>
            <label className='form-label my-2'>Name : </label>
            <input type="text" value={this.state.name} name="name" placeholder='Enter Name' onChange={this.formChangeHandler} className="form-control"></input>

            <label className='form-label my-2'>Email Address : </label>

            <input type="email" value={this.state.email} name="email" placeholder='Enter Email Id' onChange={this.formChangeHandler} className="form-control"></input>
            <label className='form-label my-2'>Password : </label>

            <input type="password" value={this.state.password} name="password" placeholder='Enter Password' onChange={this.formChangeHandler} className="form-control"></input>
                <input type="submit" value="Register" className='btn btn-success my-2'></input>
            <button onClick={this.visiblePassword}>Show Password</button>
<StyleBtn>Login</StyleBtn>
        </form>
      </div>
    )
}
}
}

export default RegistrationForm