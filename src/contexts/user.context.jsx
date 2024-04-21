import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// as value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    useEffect(() => {
        const unsuscribe = onAuthStateChangedListener((user) => {
            console.log(user);
        });

        return unsuscribe;
    }, []);


    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
};
