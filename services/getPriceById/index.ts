import { api } from "../api";
import { IPrices } from "../getPrices";

interface ILogin {
    username: string;
    password: string;
}

export default async function getPriceById(id: number): Promise<IPrices | undefined> {
    try {
        const response = await api.get<IPrices>(`/cadastro/precos/${id}`)

        return response.data;
    } catch(e){
        // TODO: handle error here like inform to backend or something like that
        return undefined;
    }
}