// function Jsx(){
//     return(
//         <div>{5*5}</div>
//     )
// }
// export default Jsx

//without JSX
import React from "react"
function Jsx(){
    return(
       React.createElement("h1",null,"Hello World from without JSX")
    )
}
export default Jsx