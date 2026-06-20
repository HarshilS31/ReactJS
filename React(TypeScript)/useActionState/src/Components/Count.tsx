import { useActionState } from "react";

// The puropose of UseActionState is to manage and track the state of a form submission async action.
//Think it as of a specialised useState for the forms!
const Count = () => {
    const increment = async (prevState: number, formData: FormData): Promise<number> => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
        console.log(formData.get("password"));
        
        return prevState + 1;
    };
    const [state, formAction] = useActionState(increment, 0);
    
    return (
        <form action={formAction}>
            <h1>Number of Form Submissions:{state}</h1>
            <input name="name" placeholder="Enter Name" type="text" />
            <input name="email" placeholder="Enter email" type="email" />
            <input name="password" placeholder="Enter password" type="password" />
            <button type="submit">Increment</button>
        </form>
    );
};

export default Count;