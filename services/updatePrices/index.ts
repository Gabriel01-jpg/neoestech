import { api } from "../api";

export interface IPricesUpdate {
    id: string;
    city: string;
    price: number;
    fuel: string;
}

export default async function updatePrices({ city, fuel, price, id } : IPricesUpdate) {

    try {
        const response = await api.put(`/cadastro/precos/${id}`, {
            cidade: city,
            combustivel: fuel,
            preco: price
        })

        return response.data;
    } catch(e){
        // handle error here
    }
}