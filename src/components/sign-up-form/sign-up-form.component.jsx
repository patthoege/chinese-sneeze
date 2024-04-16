import { useState } from "react";

import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    name: '',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserDocumentFromAuth(user, { name });
        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={name}
                    required
                />

                <label>Email</label>
                <input 
                    onChange={handleChange} 
                    type="email" 
                    name="email"
                    value={email}
                    required
                />

                <label>Password</label>
                <input 
                    onChange={handleChange}
                    type="password" 
                    name="password"
                    value={password}
                    required
                />

                <label>Confirm Password</label>
                <input 
                    onChange={handleChange} 
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    required
                />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;