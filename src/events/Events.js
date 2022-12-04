function Events(){
   let data="Sakil";
   function apple(){
    data="peter"
       alert(data)
   }
    return(
        <div>
        <h1>{data}</h1>
        <button onClick={apple}>Click me</button>
        </div>
    )
}

export default Events