import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/TodoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => { // Dispatch uses a reducer to modify values in the store!
        e.preventDefault()
        dispatch(addTodo(input)) //  The syntax `dispatch(addTodo(input))` is used to dispatch an action to the Redux store. In this case, `addTodo` is an action creator that takes the `input` value as a payload and returns an action object. The `dispatch` function sends this action to the Redux store, which then uses the corresponding reducer to update the state based on the action.
        setInput('') //clear the input field after adding a todo
    }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo