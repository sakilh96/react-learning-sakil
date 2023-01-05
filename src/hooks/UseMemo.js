import { useState, useMemo } from "react"

function UseMemo(){
    const [item,setItem] = useState(10);
    const [count,setCount] = useState(0);

    const multiCount= useMemo(function multiCount(){
        console.log("multiCount")
        return count*3;
    },[count])
   
    return(
        <>
        <h3>{multiCount}</h3>
        <h2>UseMemo hook</h2>
        <h2>Item : {item} </h2>
        <h2>count : {count} </h2>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
        <button onClick={()=>setCount(count+1)}>Update count</button>
        </>
    )
}

export default UseMemo