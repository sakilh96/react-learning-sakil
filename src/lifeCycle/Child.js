import React,{ Component } from "react";

export default class Child extends Component{

    componentWillUnmount(){
        alert('componentWillUnmount')
    }
   render(){
    return(
        <div>
            <h1>Child Component</h1>
        </div>
    )
   }
}