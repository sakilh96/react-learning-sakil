import React,{useState} from "react"
function UseState(){
    const [data,setData] = useState('Sakil');
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={()=>setData('Hossain')}>Click</button>
        </div>
    )
}

export default UseState