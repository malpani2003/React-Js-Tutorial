import React,{Component} from "react";
import '../App.css';

class User_Card extends Component{
    render(){
        return(
            <div className="Card_User">
                <h1>Pranav Malpani</h1>
                <h3>Web Developer</h3>
                <h3>Skills</h3>
                <a href="">HTML</a>
                <a href="">CSS</a>
                <a href="">JavaScript</a>
                <a href="">Python</a>
                <a href="">C/C++</a>
                <a href="">Node JS</a>
                <a href="">MongoDb</a>
                <p>Joined on Jan 7,2023</p>

            </div>
        )
    }
}

export default User_Card