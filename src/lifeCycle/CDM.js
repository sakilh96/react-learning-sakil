import React,{Component} from "react";

export default class CDM extends Component{
   constructor(){
      super();
    //   console.log("constructor");
    this.state={
        name : "Sakil"
    }
   }

   componentDidMount(){
    console.log('componentDidMount')
   }

   render(){
    // console.log('render');
    return(
   
        <div className="App">
            <h2>Component did mount {this.state.name}</h2>
            <button onClick={()=>{this.setState({name:'Hossain'})}}>Click</button>
        </div>
    )
   }
}