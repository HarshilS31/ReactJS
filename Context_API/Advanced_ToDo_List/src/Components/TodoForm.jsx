import { useState } from 'react'
import { useTodo } from '../Context/ToDoContext'

function TodoForm() {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo.trim()) return
    addTodo({ todo: todo.trim(), completed: false })
    setTodo('')
  }

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-150 focus:border-sky-500/70 focus:bg-white/10 focus:ring-1 focus:ring-sky-500/30"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2.5 rounded-lg text-sm font-medium bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white transition-colors duration-150 shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
        disabled={!todo.trim()}
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm