import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { destroyCookie, setCookie } from 'nookies'
import { getUserOnStorage } from "../utils/Helpers/storage/getUserOnStorage";
import { api } from "../services/api";

interface Props {
    children: ReactNode;
}

export interface User {
    nome: string;
    token: string;
    uuid: string;
}

type AuthContextProps = {
    user: User | undefined;
    isAuthenticated: boolean;
    setUser: Dispatch<SetStateAction<User | undefined>>
    
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children } : Props){
    const [user, setUser] = useState<User | undefined>(undefined);

    const isAuthenticated = !!user;

    useEffect(() => {
        const user = getUserOnStorage();
        if(user){
            setUser(user)
            api.defaults.headers["Authorization"] = `Bearer ${user.token}`;
        } else {
            SignOut();
        }

    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser }}>
            {children}
        </AuthContext.Provider>

    )
}

export function SignOut(){
    destroyCookie(null, 'neo.token')
}
