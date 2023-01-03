import { useState } from "react";
function State(){
    const [data,setData]= useState(0);
    function updateData(){
        
        setData(data+1)
    }
    return(
        <div className="App">
        <h1>I am state</h1>
         <h1>{data}</h1>
        <button onClick={updateData}>Click me</button>
        </div>
    );
}
export default State;