import { useEffect, useState } from "react";
import getPrices from "../services/getPrices";

export interface IPricesDTO {
    id: number;
    cidade: string;
    combustivel: string;
    preco: number;
    createdAt: string;
    updatedAt: string;
}


export function usePrices(){
    const [prices, setPrices] = useState<IPricesDTO[] | undefined>(undefined);
    const [error, setError] = useState(false);

    useEffect(() => {
        requestAPIPrices()
    }, [])

    const requestAPIPrices = async () => {
        try {
            const response = await getPrices();
            const prices: IPricesDTO[] | undefined = response?.map((price) => {
                return {
                    ...price,
                    createdAt: new Date(price.created_at).toLocaleString('pt-br', { dateStyle: 'short' }),
                    updatedAt: new Date(price.updated_at).toLocaleString('pt-br', { dateStyle: 'short' }),
                }
            })

            response && setPrices(prices);
        } catch(e){
            setError(true)
        }
    }

    const refetch = async () => {
        requestAPIPrices();
    }

    return { prices, error, refetch }
}