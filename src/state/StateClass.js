import React,{Component} from 'react';

export default class StateClass extends Component{
constructor(){
    super();
    this.state={
        data:0
    }
}
incrememt(){
    this.setState({data:this.state.data+1})
}
  render(){
    return(
        <div>
            <h1>I am state with class/practiing State</h1>
            <h3>{this.state.data}</h3>
          <button onClick={()=>this.incrememt()}>Click</button>
        </div>
    )
  }
}