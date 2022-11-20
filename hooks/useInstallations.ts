import {  useEffect, useState } from "react";
import getInstallations from "../services/getInstallations";

export interface IInstallationsDTO {
    nome: string;
    latitude: number;
    longitude: number;
    status: string;
    key: number;
}

export function useInstallations(){
    const [installations, setInstallations] = useState<IInstallationsDTO[] | null>(null);
    const [center, setCenter] = useState<any>(null);

    useEffect(() => {
        requestInstalacoesAPI();
    }, [])

    const requestInstalacoesAPI = async () => {
        try {
            const installations = await getInstallations();
            const newDataTable: IInstallationsDTO[] | null = installations && installations.map((current, index) => {
                return {
                    key: index,
                    status: current.status_internet,
                    latitude: current.latitude,
                    longitude: current.longitude,
                    nome: current.nome,


                }
            })
            installations && setCenter([installations[0].latitude, installations[0].longitude])
            setInstallations(newDataTable);
        } catch(e){
            // TODO: Disparar erro
        }
        
    }

    return { installations, center, setCenter }
}