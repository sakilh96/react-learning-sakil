import { useState } from "react";
function Form() {
    const [name,setName]= useState('');
    const [interest,setInt]= useState('');
    const [tnc,setTnc]= useState(false);
    function getFormData(e){
        console.log(name,interest,tnc)
         e.preventDefault();
         
    }
    return (
        <div>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter ypur name"  onChange={(e)=>setName(e.target.value)}/><br></br>
                <br></br>
                <select onChange={(e)=>setInt(e.target.value)}>
                    <option>Movies</option>
                    <option>Insta/Twitter</option>
                    <option>Study</option>
                    <option>Sleeping</option>
                </select>
                <br></br>
                <br></br>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms & Condition</span>
                <br></br>
                <br></br>
                <button typr="submit">Submit</button>
            </form>

        </div>
    )
}

export default Form;