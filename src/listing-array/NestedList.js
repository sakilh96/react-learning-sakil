import { Table } from "react-bootstrap"
function NestedList(){

    const student= [
        {name:"Ram", email:"ram@gmail.com", address:[
            {hn:10, city:"kolkata", country:"India"},
            {hn:11, city:"Mumbai", country:"India"},
            {hn:12, city:"Delhi", country:"India"},
        ]},
        {name:"Sam", email:"sam@gmail.com", address:[
            {hn:10, city:"kolkata", country:"India"},
            {hn:11, city:"Mumbai", country:"India"},
            {hn:12, city:"Delhi", country:"India"},
        ]},
        {name:"Rahim", email:"rahim@gmail.com", address:[
            {hn:10, city:"kolkata", country:"India"},
            {hn:11, city:"Mumbai", country:"India"},
            {hn:12, city:"Delhi", country:"India"},
        ]},
        {name:"Peter", email:"peter@gmail.com", address:[
            {hn:10, city:"kolkata", country:"India"},
            {hn:11, city:"Mumbai", country:"India"},
            {hn:12, city:"Delhi", country:"India"},
        ]},
    ]
    return(
        <div>
            <h1>Nested list with nested array</h1>
            <Table striped >
                <tbody>
            <tr>
                <td>Sl</td>
                   <td>Name</td>
                   <td>Email</td>
                   <td>Address</td>
                  
                </tr>
            {
                student.map((item,i)=>
                <tr key={i}>
                   <td>{i+1}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>
                    <Table>
                        <tbody striped >
                    {
                        item.address.map((data,j)=>
                        <tr key={j}>
                        <td>{data.hn}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                        </tr>
                        )
                    }
                    </tbody>
                    </Table>
                   </td>
                   
                </tr>
                 
                )
            }
            </tbody>
            </Table>
        </div>
    )
}

export default NestedList