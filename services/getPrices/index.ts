import { ColumnsType } from "antd/es/table";
import { User } from "../../context/AuthProvider";
import { api } from "../api";

export interface IPrices {
    id: number;
    cidade: string;
    combustivel: string;
    preco: number;
    created_at: string;
    updated_at: string;
}

export default async function getPrices(): Promise<IPrices[] | null> {

    try {
        const response = await api.get<IPrices[]>(`/cadastro/precos`)

        return response.data;
    } catch(e){
        console.log(e);
        return null
    }
}