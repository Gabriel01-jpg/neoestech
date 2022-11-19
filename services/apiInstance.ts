import axios from "axios";

export const api = axios.create({
    baseURL: 'https://dev.api.neoestech.com.br',
    headers: {
        'Accept': 'application/json',
        'Content-Type':' application/json',
        'Authorization': 'bearer'
    }
  });