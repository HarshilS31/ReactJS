import { createContext } from "react"

// Step 1: Define the shape of what the context will hold
interface CounterContextProps {
  count:    number
  setCount: React.Dispatch<React.SetStateAction<number>>
}

// Step 2: Create the context with a default value that satisfies the interface
// The default only kicks in if a component reads context WITHOUT a Provider above it
export const CounterContext = createContext<CounterContextProps>({
  count:    0,
  setCount: () => {},
})