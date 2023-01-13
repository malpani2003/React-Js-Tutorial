import React,{Component} from "react";

function HexaDecimal_Generrtor(props){
    console.log(props);
    let color=props.color;
    return(
        <div className="HexGen">
            <h2 style={{"backgroundColor":`${color}`,"padding":"10px","textAlign":"center"}}>{color}</h2>
        </div>
    )
}
export default HexaDecimal_Generrtor;