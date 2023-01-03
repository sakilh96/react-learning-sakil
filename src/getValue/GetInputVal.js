import { useState } from "react";
function GetInputVal(){
    const [val,setData]= useState('')
    const [print,setPrint]= useState(false)
    function getData(data){
        setData(data.target.value);
        console.log(data.target.value)
        setPrint(false)
    }
    return(
        <div>
            {
                print ?   <h2>{val}</h2> : ''
            }
          
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)}>Print</button>
        </div>
    )
}

export default GetInputVal;