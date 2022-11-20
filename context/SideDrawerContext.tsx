/* import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { destroyCookie, setCookie } from 'nookies'
import { getUserOnStorage } from "../utils/Helpers/storage/getUserOnStorage";

interface Props {
    children: ReactNode;
}

export interface User {
    nome: string;
    token: string;
    uuid: string;
}

type SideDrawerContextProps = {
   isOpen: boolean;
   handleOpen: () => void;
    
}

export const SideDrawerContext = createContext({} as SideDrawerContextProps);

export function SideDrawerProvider({ children } : Props){
    const [user, setUser] = useState<User | undefined>(undefined);

    const isAuthenticated = !!user;

    useEffect(() => {
        const user = getUserOnStorage();
        if(user){
            setUser(user)
        } else {
            SignOut();
        }

    }, [])

    return (
        <SideDrawerContext.Provider value={{ isAuthenticated, user, setUser }}>
            {children}
        </SideDrawerContext.Provider>

    )
}

export function SignOut(){
    destroyCookie(null, 'neo.token')
}
 */

export const Error = '';