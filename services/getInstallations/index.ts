import { User } from "../../context/AuthProvider";
import { api } from "../api";

export interface IInstallations {
    id: number;
    estado: string;
    latitude: number;
    longitude: number;
    monitoramento: boolean;
    nome: string;
    prefixo: string;
    status_internet: string;
}

export default async function getInstallations(): Promise<IInstallations[] | null> {
    try {
        const response = await api.get<IInstallations[]>('/monitoramento/instalacoes')

        return response.data;
    } catch(e){
        console.log(e);
        return null
    }
}