import { useRef } from "react"
const InputFocus = () => {
    const inputRef=useRef<HTMLInputElement>(null);
    const handleClick = ()=>{
        inputRef.current?.focus()
        
    }
  return (
    <div>
        <input type="text"  ref={inputRef} placeholder="Enter Input">
        </input>
        <button onClick={handleClick}>DONE!</button>
    </div>
  )
}

export default InputFocus