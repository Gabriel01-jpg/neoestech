import { User } from "../../context/AuthProvider";
import { api } from "../api";

interface ILogin {
    username: string;
    password: string;
}

export default async function loginService({ username, password } : ILogin): Promise<User | undefined> {
    try {
        const response = await api.post<User>('/login', {
            login: username,
            password
        })

        return response.data;
    } catch(e){
        throw new Error('')
    }
}