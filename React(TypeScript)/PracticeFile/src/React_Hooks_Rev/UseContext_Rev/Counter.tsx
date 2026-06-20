import { useContext }    from "react"
import { CounterContext } from "./CounterContext"

function Counter() {
  // useContext reads the nearest Provider above this component in the tree
  // TS already knows: count is number, setCount is Dispatch<SetStateAction<number>>
  const { count, setCount } = useContext(CounterContext)

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default Counter