import { User } from "../../context/AuthProvider";
import { api } from "../api";

interface ILogin {
    username: string;
    password: string;
}

export default async function removePriceById(id: number) {
    try {
        const response = await api.delete(`/cadastro/precos/${id}`)

        return response.data;
    } catch(e){

    }
}