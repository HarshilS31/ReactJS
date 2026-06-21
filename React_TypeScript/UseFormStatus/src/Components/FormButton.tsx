import {useFormStatus} from "react-dom"
const FormButton = () => {
    const form =useFormStatus();
    console.log(form)

  return (
    <div>FormButton</div>
  )
}

export default FormButton