import { useState } from "react"
import PopUpContent from "./PopUpContent";
const CopyInput = () => {
    const[input,setInput]=useState('')
    const[copied,setCopied]=useState(false);
    function handleCopy() {
        navigator.clipboard.writeText(input).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),2000);


        })

    }

  return (
    <div>
        <input type="text" placeholder="Enter Input" value={input} onChange={e=>setInput(e.target.value)}></input>
        <button onClick ={handleCopy}>Copy</button>
        <PopUpContent copied={copied}/>
    </div>
  )
}

export default CopyInput