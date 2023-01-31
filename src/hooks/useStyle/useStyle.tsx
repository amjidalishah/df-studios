import { useState, createContext, useContext, ReactNode } from 'react'

type authContextType = {
    style: object | null;
};

const authContextDefaultValues: authContextType = {
    style: null
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    
    const [ style, setStyle ] = useState<authContextType['style']>(authContextDefaultValues.style);

    const value = {
        style
    };

    return (
    <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    </>
);
}