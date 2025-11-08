function Mood(props){
    return(
        <div>
            <h1>User is {props.mood.charAt(0).toUpperCase() + props.mood.slice(1)}</h1>
        </div>
    )
}


export default Mood