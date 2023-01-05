import { useState } from "react"

function HOC(){
    return(
        <>
        <h1>HOC</h1>
        <HOCgreen cmp={Counter}/>
        <HOCblue cmp={Counter}/>
        
        </>
    )
}

function HOCgreen(props){
   return <h1 style={{backgroundColor:'green',width:100}}><props.cmp /> </h1>
}
function HOCblue(props){
    return <h1 style={{backgroundColor:'blue',width:100}}><props.cmp /> </h1>
 }

function Counter(){
    const [count,setCount] = useState(0)
    return(
        <>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Count</button>
        </>
    )
}

export default HOC