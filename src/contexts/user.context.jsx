import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// as value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    useEffect(() => {
        const unsuscribe = onAuthStateChangedListener((user) => {
         if (user) {
            createUserDocumentFromAuth(user);
         }
         setCurrentUser(user);
        });

        return unsuscribe;
    }, []);


    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
};
