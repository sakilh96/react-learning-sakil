import React,{Component} from "react";

export default class UserClass2 extends Component{
    constructor(){
        super();
        this.state= {
            data: 0
        }
    }
      increment(){
       this.setState({data: this.state.data+1});
    }
    render(){
        return(
            <div>
                <h1>Practicing class compoent</h1>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}