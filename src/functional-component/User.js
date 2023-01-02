import React,{useState} from "react";
function User(){
    const [data,setData] = useState(0);
    function increment(){
        setData(data+1);
    }
    return(
        <div>
            <h1>Practicing function class/state</h1>
            <h3>{data}</h3>
            <button onClick={()=>increment()}>Increment</button>
        </div>
    )
}

export default User;