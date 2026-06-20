import FormButton from "./FormButton"
import {useFormStatus} from "react-dom"
const Form = () => {
    async function FormAction(formData) {
        await new Promise(resolve=>setTimeout(()=>resolve,2000));
        const newPost= {
            name:formData.get('name'),
            email:formData.get('email')
        }
         
    

    }
  return (
        <form action={FormAction}>
            <div>
                <label htmlFor='Name'>Name</label>
                <input type='text' placeholder='Enter name' name='name' required />
            </div>
            <div>
                <label htmlFor='email'>email</label>
                <input type='text' placeholder='Enter email' name='email' required />
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input type='text' placeholder='Enter password' name='password' required />
            </div>
            <FormButton />
        </form>
  )
}

export default Form