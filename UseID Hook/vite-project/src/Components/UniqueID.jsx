import { useId } from "react"
const UniqueID = () => {
  const id =useId() //yeah thats it!
  return (
    <div>
        <label htmlFor={`${id}->email`}>Email:
            <input type="email" id={`${id}`}></input>

        </label>
        <br />
        <label htmlFor={`${id}->password`}>Password:
            <input type="password" id={`${id}`}></input>

        </label>
        
    </div>
  )
}

export default UniqueID