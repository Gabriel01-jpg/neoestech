import { User } from "../../../context/AuthProvider";

export function serUserOnStorage(user: User){
    localStorage.setItem('neo.user', JSON.stringify(user))
}