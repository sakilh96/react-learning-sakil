function UserChild(props){
    return(
        <div>
            <h1>User child compoent</h1>
            <button onClick={props.data}>Call data function</button>
        </div>
    )
}
export default UserChild