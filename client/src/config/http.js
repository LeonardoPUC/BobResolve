import axios from "axios";
import { env } from "./env";

const defaultEnv = 'production';

export const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Authorization: `Bearer ${env[defaultEnv].Token}`
    }
})
