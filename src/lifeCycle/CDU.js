import React,{Component} from "react";

export default class CDU extends Component{
    constructor(){
        super();
        this.state={
            // name: "sakil",
            data: 0,
        }
        // console.log('constructor')
    }
    componentDidUpdate(prePops, preState, snapshot){
        console.log('componentDidUpdate',prePops, preState, snapshot);
    }
    render(){
        // console.log('render')
        return(
            <div>
                <h1>Component Did Update {this.state.data}</h1>
                {/* <button onClick={()=>{this.setState({name: "Sooraj"})}}>Click</button> */}
                <button onClick={()=>{this.setState({data: this.state.data+1})}}>Click</button>
            </div>
        )
    }
}