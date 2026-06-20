import Person from "./Person"
import Card from "./Card"
function App() {
  return (
    <>
    <Person name="Chris" age={19} email="Chris@email.com" />
    <Card>
      <h3>Here is some data for the card</h3>
    </Card>


    </>
  )
}
export default App