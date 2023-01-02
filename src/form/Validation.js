import React,{useState} from "react";
function Validation(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailErr,setEmailErr] = useState(false)
    const [passErr,setPassErr] = useState(false)
    function loginHandle(e){
        if(email.length<3 && password.length<3)
        {
            alert('Type correct values')
        }
        else
        {
            alert('All good');
        }
        e.preventDefault();

        
    }
    function handleEmail(e){
        let item= e.target.value;
        if(item.length<3){
            setEmailErr(true);
        }else{
            setEmailErr(false);
        }
        setEmail(item)
       
    }
    function handlePass(e){
        let item= e.target.value;
        if(item.length<3){
            setPassErr(true);
        }else{
            setPassErr(false);
        }
        setPassword(item)
    }
    return(
        <div>
        <h1>Form Validation</h1>
        <form onSubmit={loginHandle}>
              <input type="text" placeholder="email" onChange={handleEmail}/>{emailErr ? <span>Email must be more the 3 char</span> : ''}
              <br></br>
              <input type="password" placeholder="password" onChange={handlePass}/>{passErr ? <span>Pass must be more the 3 char</span> : ''}
              <br></br>
              <button type="submit">Submit</button>

        </form>
        </div>
      
    )
}

export default Validation