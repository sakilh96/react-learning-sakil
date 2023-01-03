import {Table} from 'react-bootstrap';
function ListingWithMap() {
    // const student = ['Ram','Sam','Akbar','Babar'];
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
    //map
    // student.map((item)=>{
    //      console.log('Student name is ', item);
    // });

    //for
    // for(let i=0; i<student.length; i++){
    //     console.log('loop Student name is ', student[i]);
    // }

    return (
        <div>
            <h1>Array Mappp</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    student.map((item,i) =>
                    item.phone === 9999999 ? 
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                        :
                        ""
                    )
                }
                </tbody>
            </Table>


        </div>
    )
}

export default ListingWithMap