import { useState,useRef } from "react"
type formData ={
    name:string,
    email:string;
    password:string
}
const Form = () => {
    const [submittedData,setSubmittedData]= useState<formData>({
        name:"",
        email:"",
        password:""
    })
    const name =useRef<HTMLInputElement>(null);
    const email =useRef<HTMLInputElement>(null);
    const password=useRef<HTMLInputElement>(null);
    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const nameVal=name.current!.value;
        const emailVal=email.current!.value;
        const passwordVal=password.current!.value;
        setSubmittedData({name:nameVal,
            email:emailVal,
            password:passwordVal
        })
        
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" ref={name} placeholder="Enter name  " />
        <input type="text" ref={email} placeholder="Enter email " />
        <input type="text" ref={password} placeholder="password " />
        <button type="submit">Submit Form!</button>
        <div>
            <h3>Name:{submittedData.name}</h3>
            <h3>e-Mail ID:{submittedData.email}</h3>
            <h3>Password:{submittedData.password}</h3>
       </div>
    </form> 


    </>
  )
}

export default Form