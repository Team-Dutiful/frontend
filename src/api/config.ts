import axios from "axios";

const SEVER_PORT = 8080;
axios.defaults.baseURL = `http://localhost:${SEVER_PORT}`;
axios.defaults.withCredentials = true;

export const instance = axios.create();
