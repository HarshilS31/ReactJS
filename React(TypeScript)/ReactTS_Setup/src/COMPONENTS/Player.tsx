import type { ReactNode } from "react"

// type PlayerDetails={name:string,club:string}
interface i1 {
  children:ReactNode
}
const Player = ({children}:i1) => {
  return (
    <div>
        <h1>
            {/* {name} plays for {club} */} {children}
        </h1>
    </div>
  )
}

export default Player