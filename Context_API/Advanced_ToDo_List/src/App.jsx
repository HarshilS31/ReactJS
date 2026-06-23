import { useState, useEffect } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/ToDoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const completedCount = todos.filter((t) => t.completed).length

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#0f1e30] min-h-screen py-12 px-4">
        <div className="w-full max-w-xl mx-auto">

          {/* Card */}
          <div className="bg-[#172842] rounded-2xl shadow-xl border border-white/10 overflow-hidden">

            {/* Accent top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500" />

            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-white/10">
              <h1 className="text-xl font-semibold tracking-wide text-white">My Tasks</h1>
              <p className="text-sm text-white/40 mt-0.5">
                {todos.length === 0
                  ? 'No tasks yet — add one below'
                  : `${completedCount} of ${todos.length} completed`}
              </p>
            </div>

            {/* Form */}
            <div className="px-6 py-4 border-b border-white/10">
              <TodoForm />
            </div>

            {/* Todo list */}
            <div className="px-6 py-4 flex flex-col gap-2.5 min-h-[120px]">
              {todos.length === 0 ? (
                <p className="text-center text-white/25 text-sm py-8 select-none">
                  Your task list is empty.
                </p>
              ) : (
                todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))
              )}
            </div>

            {/* Footer */}
            {todos.length > 0 && (
              <div className="px-6 py-3 border-t border-white/10 flex justify-end">
                <span className="text-xs text-white/25 tracking-wide uppercase">
                  {todos.length - completedCount} remaining
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App