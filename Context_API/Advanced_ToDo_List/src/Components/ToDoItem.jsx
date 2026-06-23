import { useState } from 'react'
import { useTodo } from '../Context/ToDoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    if (!todoMsg.trim()) return
    updateTodo(todo.id, { ...todo, todo: todoMsg.trim() })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 border transition-colors duration-200 ${
        todo.completed
          ? 'bg-emerald-900/20 border-emerald-700/30'
          : 'bg-white/5 border-white/10 hover:border-white/20'
      }`}
    >
      <input
        type="checkbox"
        className="w-4 h-4 rounded cursor-pointer accent-sky-500 shrink-0"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none text-sm transition-colors duration-150 ${
          todo.completed ? 'line-through text-white/35' : 'text-white/85'
        } ${isTodoEditable ? 'border-b border-sky-500/50 pb-0.5' : 'border-b border-transparent'}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="w-7 h-7 rounded-md text-xs flex items-center justify-center shrink-0 border border-white/10 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/80 transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={() => {
          if (todo.completed) return
          if (isTodoEditable) {
            editTodo()
          } else {
            setIsTodoEditable(true)
          }
        }}
        disabled={todo.completed}
        title={isTodoEditable ? 'Save' : 'Edit'}
      >
        {isTodoEditable ? '💾' : '✏️'}
      </button>
      <button
        className="w-7 h-7 rounded-md text-xs flex items-center justify-center shrink-0 border border-white/10 bg-white/5 hover:bg-red-900/40 hover:border-red-500/30 text-white/50 hover:text-red-400 transition-all duration-150"
        onClick={() => deleteTodo(todo.id)}
        title="Delete"
      >
        ✕
      </button>
    </div>
  )
}

export default TodoItem