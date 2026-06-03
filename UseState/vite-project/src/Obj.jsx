import { useState } from "react"
const Obj = () => {
    const [movie,setMovie]=useState({
        title:"abc",
        Rating:9,
        type:"Thriller"
    })
    const handleClick =() =>{
      // const copyMovie= { ...movie }
      // copyMovie.Rating=((Math.random())*10);
      // setMovie(copyMovie)
      setMovie({...movie, Rating : Math.random()*10})


    }
  return (
    <>
    <h1>{movie.title}</h1>
    <h2>{movie.Rating}</h2>
    <h3>{movie.type}</h3>
    <button onClick={handleClick}>Change Rating Randomly!</button>
    </>
  )
}
export default Obj