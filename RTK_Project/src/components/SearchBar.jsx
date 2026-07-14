import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../features/searchSlice"
const SearchBar = () => {
  const dispatch = useDispatch()
  const [text,setText] =  useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    console.log("Form Submitted!")
    setText("")
  }
  return (
    <div>
      <form className="flex p-10 px-2 py-2 " onSubmit={(e)=>handleSubmit(e)}>
        <input value={text}  onChange={(e)=>setText(e.target.value)} required className="border-2 rounded-2xl p-2 m-2 gap-4" type="text" placeholder="Search here..."/>
        <button  className=" cursor-pointer active:scale-95 border-2 rounded-2xl p-2 m-2 gap-4">Search</button>
      </form>
    </div>
    
  )
}

export default SearchBar