import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://node-proyecto-final-e1e5a527eaf9.herokuapp.com',
    withCredentials: true,
});

export default clienteAxios;