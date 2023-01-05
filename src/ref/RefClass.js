import React,{Component,createRef} from "react";

export default  class RefClass extends Component{
    constructor(){
        super();
        this.inputRef= createRef();
       
    }
    componentDidMount(){
        // console.log(this.inputRef.current.value=1000);
    }
     getRef(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color= "red"
        this.inputRef.current.style.backgroundColor="blue"
    }
   render(){
    return(
        <>
        <h1>Learning REF in Class Component</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getRef()}>Click</button>
        </>
    )
   }
}