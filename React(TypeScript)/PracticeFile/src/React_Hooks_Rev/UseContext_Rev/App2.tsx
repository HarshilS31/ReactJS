import { useState }       from "react"
import { CounterContext } from "./Counter_Context"
import Counter  from "./Counter"
import { type ReactNode } from "react"

// ReactNode = anything React can render (JSX, string, null, arrays, fragments)
function App2({ children }: { children?: ReactNode }) {
  // State lives HERE — not in the context file, not in the consumer
  const [count, setCount] = useState(0)

  return (
    // Wrap the tree — everything inside can now read count and setCount directly
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
      {children}
    </CounterContext.Provider>
  )
}

export default App2