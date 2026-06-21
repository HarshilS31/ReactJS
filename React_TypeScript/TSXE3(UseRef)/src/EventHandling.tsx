

const EventHandling = () => {
  const handleClick = (e:React.MouseEvent<HTMLDivElement>) =>{
    console.log("You Cliked the button",e.currentTarget)

  }
  const handleMouseEnter = (e:React.MouseEvent<HTMLButtonElement>) =>{
    console.log(e.currentTarget)


  }
  return (
    <div onMouseEnter={handleMouseEnter}>
    <h2>
        Event Handling Example:
        <button onClick={handleClick}>Click</button>
    </h2>
    </div>
  )
}

export default EventHandling