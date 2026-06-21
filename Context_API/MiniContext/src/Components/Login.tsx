import { useContext, FormEvent } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const { setUser } = useContext(UserContext);

    const handleFormAction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('userName') as string;
        const email = formData.get('userEmail') as string;
        const password = formData.get('userPassword') as string;

        if (setUser) {
            setUser({ name, email, password });
        }
    };

    return (
        <div>
            <h2>Login Here!</h2>
            <form onSubmit={handleFormAction}>
                <div>
                    <input 
                        type='text' 
                        name='userName' 
                        placeholder='Enter Name' 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type='email' 
                        name='userEmail' 
                        placeholder='Enter email' 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type='password' 
                        name='userPassword' 
                        placeholder='Enter password' 
                        required 
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Login;