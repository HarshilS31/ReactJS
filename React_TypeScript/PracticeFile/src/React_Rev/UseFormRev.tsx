import {useForm} from "react-hook-form"
import { useState } from "react"
interface formType {
    name:string;
    email:string;
    password:string;

}

const UseFormRev = () => {
    const {register,handleSubmit,formState:{errors}} =useForm<formType>()
    const [data,setData]=useState<formType>({
    name:'',
    email:'',
    password:'',
     }
    )
    const updateData = (newData)=> {
        setData(newData)
        
    }

  return (
    <>
    <form onSubmit={handleSubmit(updateData)}>
        <input {...register("name",{required:"Name is required"})} />
        {errors.name && <span>{errors.name.message}</span>}
        <input {...register("email",{required:"Email is required"})} />
        {errors.email && <span>{errors.email.message}</span>}
        <input {...register("password",{required:"Password is required"})} />
        {errors.password && <span>{errors.password.message}</span>}
        <button type="submit">Submit form</button>

    </form>
    <h2>User Details</h2>
    <div>{data.name}</div>
    <div>{data.email}</div>
    <div>{data.password}</div>

    </>
  )
}

export default UseFormRev