import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div>
            <h1>Sign up</h1>
            <form onSubmit={() => {}}>
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
                    name="pasword"
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