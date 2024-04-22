import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInAuthWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
          switch (error.code) {
            case 'auth/invalid-credential':
                alert('Incorrect credentials for either email or password. Please try again.');
                break;
            default:
           console.log(error);
           }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    onChange={handleChange} 
                    type="email" 
                    name="email"
                    value={email}
                    required
                />

                <FormInput
                    label="Password" 
                    onChange={handleChange}
                    type="password" 
                    name="password"
                    value={password}
                    required
                />
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;