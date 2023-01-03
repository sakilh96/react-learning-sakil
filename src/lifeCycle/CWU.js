import React,{Component} from "react";
import Child from "./Child";

export default class CWU extends Component{
    constructor(){
        super();
        this.state={
            // name: "sakil",
            show: true,
        }
        // console.log('constructor')
    }
  
    render(){
        // console.log('render')
        return(
            <div>
                {
                    this.state.show ? <Child/> : <h1>Child component removed</h1>
                }
                
                <button onClick={()=>{this.setState({show: !this.state.show})}}>Toggle</button>
            </div>
        )
    }
}