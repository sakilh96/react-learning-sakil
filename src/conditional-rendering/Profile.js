import React,{useState} from "react";
function Profile(){
    // const [loggedIn,setLogedIn] = useState(1);
    const loggedIn=2;
    
    return(
        <div>
            {/* {loggedIn ? 'Welcome Sakil' : 'Welcome Guest'} */}
            {loggedIn==1 ? <h1>Welcome User1</h1> : loggedIn==2 ? <h1>Welcome user2</h1> : <h1>Welcome other user</h1> }
        </div>
    )
}

export default Profile