import React from "react";
import UserChild from "./UserChild";
function User(props){
    return(
        <div>
            <h1>Pass function as propsss</h1>
            <UserChild data={props.data}/>
            
        </div>
    )
}

export default User