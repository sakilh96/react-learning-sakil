// import React from "react"
import FragmentChild from "./FragmentChild"
function FragmentParent() {
    return (

        // <React.Fragment>
        //     <h1>Learning Fragment</h1>
        //     <h1>Learning Fragment2</h1>
        // </React.Fragment>
        <>
            {/* <h1>Learning Fragment</h1>
            <h1>Learning Fragment2</h1> */}
            <table border={1}>
                <tbody>
                <tr>
                    <FragmentChild/>
                </tr>
                </tbody>
            </table>
        </>


    )
}

export default FragmentParent