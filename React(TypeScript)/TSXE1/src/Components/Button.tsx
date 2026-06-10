
const Button = (props:{label:string,onClick:()=>void,buttonState:boolean}) => {

  return (
    <div>
        <button  onClick={props.onClick} disabled={props.buttonState}>{props.label}</button>
    </div>
  )
}

export default Button