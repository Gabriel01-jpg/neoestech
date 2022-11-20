import axios from "axios";
import { parseCookies } from "nookies";

const token = parseCookies();

export const api = axios.create({
    baseURL: 'https://dev.api.neoestech.com.br',
    headers: {
        'Accept': 'application/json',
        'Content-Type':' application/json',
        Authorization: `Bearer ${token['neo.token']}`
    }
  });