const ValidPass =() =>{
  return  <h2>The password is VALID</h2>

}
const InvalidPass = () => {
  return <h2>The password is INVALID </h2>
}
const PassW =({isValid}) =>{
  return (isValid ? <ValidPass /> : <InvalidPass />)
}
export default PassW