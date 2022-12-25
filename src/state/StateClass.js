import React,{Component} from 'react';

export default class StateClass extends Component{
    constructor(){
        super();
        this.state={
            // data:"Sakil"
            data:0
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    }
  render(){
    return(
        <div>
            <h1>I am state with class</h1>
            <h2>{this.state.data}</h2>
            <button onClick={()=>this.apple()}>Click me</button>
        </div>
    )
  }
}