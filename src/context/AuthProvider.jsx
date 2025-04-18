import React, { createContext, useEffect, useState }from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext(); // Create a context for authentication 

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null); // State to hold the user information

    useEffect(() => {
        setLocalStorage(); // Set the local storage with initial data
        const {employees, admin} = getLocalStorage(); // Get user data from local storage
        setUserData({employees, admin}); // Set the user data in state
    }, []);

    return(
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
    );
};

export default AuthProvider;