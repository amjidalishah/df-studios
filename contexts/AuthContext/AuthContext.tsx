'use client';
import { createContext, useContext, useState } from "react";

const Auth = createContext({})

export const AuthContext = ({ children }) => {
    const [session, setSession] = useState(null);

    return (
        <Auth.Provider value={{ session, setSession }}>
            {children}
        </Auth.Provider>
    )
};

export const useAuth = () => useContext(Auth);