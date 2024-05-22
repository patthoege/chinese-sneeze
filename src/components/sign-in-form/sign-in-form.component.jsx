import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { 
    signInWithGooglePopup,
    signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

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
        <SignInContainer>
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
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button 
                      buttonType={BUTTON_TYPE_CLASSES.google} 
                      onClick={signInWithGoogle}
                    >
                      Google Sign In
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;