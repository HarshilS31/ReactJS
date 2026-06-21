import Button from "./Components/Button"

const App = () => {
  return (
    <div >
      <Button label="click" onClick={()=>console.log("Hello how are you!")} buttonState={false} />

    </div>
  )
}

export default App