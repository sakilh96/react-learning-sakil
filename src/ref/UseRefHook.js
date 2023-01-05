import { useRef } from "react"

function UseRefHook(){
    let refInput= useRef(null);
    function handleInput(){
        console.log(refInput.current.value)
        refInput.current.style.color= "Red";
        refInput.current.focus();
        
    }
    return(
        <>
        <h2>Learning UseRef</h2>
        <input type="text" ref={refInput}/>
        <button onClick={handleInput}>handled input</button>
        </>
    )
}

export default UseRefHook