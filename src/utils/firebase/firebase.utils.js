import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0tm4YVacSuE6bKtBUFYDfkb-RTzPnqog",
    authDomain: "clothing-db-292f0.firebaseapp.com",
    projectId: "clothing-db-292f0",
    storageBucket: "clothing-db-292f0.appspot.com",
    messagingSenderId: "579107255482",
    appId: "1:579107255482:web:ce6165befba96385a5fe83"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  