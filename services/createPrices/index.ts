import { ColumnsType } from "antd/es/table";
import { User } from "../../context/AuthProvider";
import { api } from "../api";

export interface IPricesCreate {
    city: string;
    price: number;
    fuel: string;
}

export default async function createPrices({ city, fuel, price  } : IPricesCreate) {

    try {
        const response = await api.post(`/cadastro/precos`, {
            cidade: city,
            combustivel: fuel,
            preco: price
        })

        return response.data;
    } catch(e){
        // handle error here
    }
}