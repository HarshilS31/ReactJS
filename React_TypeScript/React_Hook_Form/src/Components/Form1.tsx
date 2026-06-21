import {useForm,type SubmitHandler} from 'react-hook-form'
interface FormValues {
    name:string;
    password:string;
}
const Form1 = () => {
    const {handleSubmit,register,formState:{errors}} = useForm<FormValues>();
    const onSubmit:SubmitHandler<FormValues> =(data) =>{
        console.log(data.name,data.password)
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Enter Name'
        {...register("name", {required:"Name is mandatory to add"})} />
        {errors.name && <span style={{color:"white",backgroundColor:"red"}}>{errors.name.message}</span>}
        <input type="password" placeholder='Enter Password' {...register("password",{required:"Password is Mandatotry to add"})} />
        {errors.password
         && <span style={{color:"white",backgroundColor:"red"}}>{errors.password.message}</span>}
        <button type="submit">Submit</button>
        </form>

   
    </>
  )
}

export default Form1