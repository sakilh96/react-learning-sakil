import { useRef } from "react"
import ForwardRefChild from "./ForwardRefChild"
function ForwardRefParent(){
    let refInput= useRef(null);
    function updateInput(){
        console.log(refInput.current.value)
        refInput.current.style.color="violet"
        refInput.current.focus()
        
    }
    return(
        <>
        <h2>ForwardRef</h2>
        <ForwardRefChild ref={refInput}/>
        <button onClick={updateInput}>Click</button>
        </>
    )
}

export default ForwardRefParent