import ReuseCompChild from "./ReuseCompChild"
function ReuseCompParent(){
    const student = [
        {
            name: "Ram", email: "ram@gmail.com", phone: 9999999
        },
        {
            name: "Sam", email: "Sam@gmail.com", phone: 9999999
        },
        {
            name: "Akbar", email: "Akbar@gmail.com", phone: 9999999
        },
        {
            name: "Babar", email: "Babar@gmail.com", phone: 99999990
        },
    ]
    return(
        <div>
            <h1>ReuseCompParent</h1>
            {
                student.map((item)=>
                  <ReuseCompChild data={item}/>
                )
            }
        </div>
    )
}

export default ReuseCompParent