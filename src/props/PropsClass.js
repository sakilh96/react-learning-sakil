import React,{Component} from "react";

export default class PropsClass extends Component{
    render(){
        return(
            <div>
                Props with class
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}