import { forwardRef } from "react";

function ForwardRefChild(props,ref){
 
    return(
        <>
        <input type="text" ref={ref}/>
        </>
    )
}

export default forwardRef(ForwardRefChild)