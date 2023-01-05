import React,{ PureComponent } from "react";

export default class User extends PureComponent{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log('check rendering')
        return(
            <>
            <h1>Pure component {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
            </>
        )
    }
}