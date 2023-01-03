function ListingWithMap() {
    // const student = ['Ram','Sam','Akbar','Babar'];
    const student = [
        {
            name: "Ram", email: "ram@gmail.com"
        },
        {
            name: "Sam", email: "Sam@gmail.com"
        },
        {
            name: "Akbar", email: "Akbar@gmail.com"
        },
        {
            name: "Babar", email: "Babar@gmail.com"
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
            <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
                {
                    student.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                }
            </table>


        </div>
    )
}

export default ListingWithMap