function ChildComp(props){
  const data = {name:"Sam",age:22,address:"Kolkata"}
  return(
    <>
    {/* <h1>Child Component</h1> */}
    <button onClick={()=>props.parent(data)}>Click</button>
    </>
  )
}

export default ChildComp