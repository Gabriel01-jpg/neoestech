import { User } from "../../context/AuthProvider";
import { api } from "../api";

export interface IMonitoring {
    temperatura: number,
    degelo: boolean | null,
    setpoint: 24,
    temperatura_erro: 31,
	data_hora: string
}

export default async function getMonitoring(): Promise<IMonitoring[] | null> {
    try {
        const response = await api.get<IMonitoring[]>('/monitoramento/historico/3595/24?chave=temperatura')

        return response.data;
    } catch(e){
        console.log(e);
        return null
    }
}