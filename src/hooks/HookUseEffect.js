import { useEffect,useState } from "react"

function HookUseEffect(){
const [data,setData] = useState(100)
const [count,setCount] = useState(10)

    useEffect(()=>{
        console.log("data", data)
    },[data])

    useEffect(()=>{
        alert("count "+ count)
    },[count])
    return(
        <div>
            <h1>Data: {data}</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>setData(data+1)}>data</button>
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
    )
}

export default HookUseEffect