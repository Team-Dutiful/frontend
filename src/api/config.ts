import axios from "axios";

const { VITE_SERVER_PORT } = import.meta.env;

axios.defaults.baseURL = `http://localhost:${VITE_SERVER_PORT}`;
axios.defaults.withCredentials = true;

export const instance = axios.create();
