const Move = () =>{
  return <h3  style={{color:"blue"}} onMouseMove={()=> {alert("You are hovering mouse Over this text")}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti recusandae cumque quisquam officia perspiciatis neque voluptate. Beatae labore deleniti error, magni ullam unde, impedit soluta excepturi nesciunt distinctio neque fugiat!</h3>
}


const EventHandlers = () => {
function HandleClick() {
    console.log("You Clicked the button")
}
  return (
    <>
    <button onClick={HandleClick}>Click</button>
    <Move />
    </>
    
  )
}

export default EventHandlers
