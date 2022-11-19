import { User } from "../../../context/AuthProvider";

export function getUserOnStorage(): User | null {
    let storage = localStorage.getItem('neo.user');

    let user: User | null = null;
    if(storage){
        user = JSON.parse(storage); 
    }

    return user;
}