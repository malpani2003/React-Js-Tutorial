import React,{Component} from "react";

// Change css file to filename.module.css
// it helps in  that differnment components cannot use this css
// resticting css file for another file
import PersonStyle from "./Person.module.css"

class Persons extends Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.props=props;
        this.state={
            name:"Pranav Malpani",
            age:19
        };

        // Constructor me binding bhi karwa sakte hai
        this.agechange=this.agechange.bind(this);

    }
    // If you use normal function syntax (ex function_name(){ }) then you will get error in this keyword instead use arrow function it will bind  the class method becoz in read class method are not bound by default

    namechange=()=>{
        console.log(this.state,this.props);
        this.setState({name:"Sammer Malpani"})
    }

    // but there are another method to bind ths to class methods

    agechange(){
        this.setState({age:20});
    }


    render(){
        // All style properties in camelCase with all property in quotes 
        // style is used for inline styling
       const btnstyle={
            backgroundColor:"pink",
            color:"black",
            marginLeft:"5px",
            borderRadius:"10px"
      };
        return (
            // className is used for defining class of tag 
            <div className={PersonStyle.user_details}>
             <h1>Hello <em>{this.state.name}</em> Age - {this.state.age}</h1>
             <p>Learning react is intresting</p>
             <button onClick={this.namechange} style={btnstyle}>Change Name</button>
             <button onClick={this.agechange.bind(this)} style={btnstyle}>Change Age</button>
            </div>
          );
     }
}

export default Persons;