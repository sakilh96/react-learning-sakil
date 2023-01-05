import ChildComp from "./ChildComp"
function ParentComp(){

    function parentAlert(data){
        console.log(data.name);
        
    }
  
    
  return(
    <>

    <ChildComp parent={parentAlert}/>
    </>
  )
}

export default ParentComp