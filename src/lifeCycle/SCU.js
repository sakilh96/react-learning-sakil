import React,{Component} from "react";

export default class SCU extends Component{
    constructor(){
        super();
        this.state={
            // name: "sakil",
            data: 0,
        }
        // console.log('constructor')
    }

    shouldComponentUpdate(){
console.log('shouldComponentUpdate',this.state.data)
        if(this.state.data>5 && this.state.data<10)
        {
            return true;
        }
        
    }
   
    render(){
        // console.log('render')
        return(
            <div>
                <h1> Should component Update {this.state.data}</h1>
                {/* <button onClick={()=>{this.setState({name: "Sooraj"})}}>Click</button> */}
                <button onClick={()=>{this.setState({data: this.state.data+1})}}>Click</button>
            </div>
        )
    }
}